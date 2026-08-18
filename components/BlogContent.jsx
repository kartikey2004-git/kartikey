import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Mermaid from "@/components/Mermaid";
import { CopyCodeButton } from "@/components/blog/CopyCodeButton";

function CodeBlock({ className, children }) {
  const language = /language-(\w+)/.exec(className || "")?.[1];
  const code = String(children).replace(/\n$/, "");

  if (language === "mermaid") {
    return (
      <div className="relative">
        <Mermaid chart={code} />
        <CopyCodeButton code={code} className="absolute top-2 right-2" />
      </div>
    );
  }

  return (
    <div className="relative">
      <pre className="my-4 overflow-x-auto rounded-md border border-border/50 bg-muted/30 p-4 text-sm">
        <code className={className}>{code}</code>
      </pre>
      <CopyCodeButton code={code} className="absolute top-4 right-2" />
    </div>
  );
}

export default function BlogContent({ content }) {
  return (
    <div className="max-w-none space-y-4 text-[calc(15px*var(--reading-font-scale,1))] leading-[calc(1.75*var(--reading-line-height,1))] text-foreground/90 [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-[calc(1.75*var(--reading-line-height,1))] [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-foreground [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_code]:rounded-sm [&_code]:bg-muted/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_img]:rounded-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          code({ className, children, ...props }) {
            const isInline = !className;
            if (isInline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{children}</CodeBlock>;
          },
          pre({ children }) {
            return <>{children}</>;
          },
          a({ href, children, ...props }) {
            const isExternal = /^https?:\/\//.test(href || "");
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
