import PathnameDisplay from "@/components/PathnameDisplay";

const RESUME_URL =
  "https://drive.google.com/file/d/1eyrmowrL6wTZLZEx5cpDHqG20rK9nGnc/view";
const RESUME_PDF_URL = "/resume.pdf";

export const metadata = {
  title: "Resume",
  description: "Preview and download my resume.",
  keywords: ["resume", "cv", "kartikey", "full stack developer"],
  openGraph: {
    title: "Resume | Kartikey",
    description: "Preview and download my resume.",
    url: "https://kartikey.dev/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        <header className="mb-8 flex items-start justify-between gap-4">
          <div>
            <PathnameDisplay />
            <h1 className="text-lg font-semibold sm:text-3xl">Resume</h1>
            <p className="mt-2 text-md text-muted-foreground">
              Here’s my resume. You can also view it directly on Drive.
            </p>
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Open in Drive
          </a>
        </header>

        <div className="overflow-hidden rounded-md border border-border/50">
          <embed
            src={RESUME_PDF_URL}
            type="application/pdf"
            title="Resume preview"
            className="aspect-[1/1.414] w-full"
          />
        </div>
      </div>
    </div>
  );
}
