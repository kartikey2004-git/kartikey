import PathnameDisplay from "@/components/PathnameDisplay";
import { Button } from "@/components/ui/button";

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
        <header className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <PathnameDisplay />
            <h1 className="heading-lg">Resume</h1>
            <p className="mt-2 body-text">
              Here’s my resume. You can also view it directly on Drive.
            </p>
          </div>

          <Button asChild variant="outline" size="sm" className="shrink-0">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Open in Drive
            </a>
          </Button>
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
