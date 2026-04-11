import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Blog",
  description:
    "Thoughts, ideas, and tutorials on web development and technology. Learn about React, Next.js, JavaScript, TypeScript, and more.",
  keywords: [
    "blog",
    "web development",
    "tutorials",
    "react",
    "next.js",
    "javascript",
    "typescript",
    "programming",
    "technology",
  ],
  openGraph: {
    title: "Blog | Kartikey",
    description:
      "Thoughts, ideas, and tutorials on web development and technology. Learn about React, Next.js, JavaScript, TypeScript, and more.",
    url: "https://kartikey.dev/blog",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
