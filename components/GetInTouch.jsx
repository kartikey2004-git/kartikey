import { Mail, ArrowUpRight } from "lucide-react";
import CopyDmLink from "./CopyDmLink";

const EMAIL = "kartikeybhatnagar247@gmail.com";

const EMAIL_SUBJECT = "Let's build something";
const EMAIL_BODY =
  "Hey Kartikey,\n\nI came across your work and wanted to reach out about a project / opportunity.\n\n\n";

const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
  EMAIL_BODY
)}`;

const X_RECIPIENT_ID = "2034691170979520512";
const X_DM_TEXT = "Hey Kartikey! wassup";

const X_DM_HREF = `https://x.com/messages/compose?recipient_id=${X_RECIPIENT_ID}&text=${encodeURIComponent(
  X_DM_TEXT
)}`;

const X_LABEL = "X";
const X_DESCRIPTION = "Let’s connect, slide into my DMs.";

const contacts = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    description: "Got an idea, opportunity, or just wanna talk? Drop me a mail.",
    href: GMAIL_COMPOSE_HREF,
    external: true,
  },
];

export default function GetInTouch() {
  return (
    <section className="w-full overflow-x-hidden bg-background py-16 sm:py-20 lg:py-24 px-2">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="space-y-2">
          <p className="eyebrow">
            Contact
          </p>

          <h2 className="heading-lg">
            Let&apos;s build something worth shipping.
          </h2>
        </div>

        <p className="mt-4 max-w-xl body-text sm:text-base">
          Good ideas, hard problems, weird experiments, I&apos;m always down
          for the next one.
        </p>

        {/* Contact Links */}
        <div className="mt-8 divide-y divide-border/50  border-border/50">
          <CopyDmLink
            href={X_DM_HREF}
            external
            label={X_LABEL}
            description={X_DESCRIPTION}
            dmText={X_DM_TEXT}
          />

          {contacts.map(
            ({
              key,
              icon: Icon,
              label,
              description,
              href,
              external,
            }) => (
              <a
                key={key}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-3 overflow-hidden px-1 py-4 transition-all duration-300 sm:gap-4 sm:px-2 md:hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Hover accent */}
                <span className="absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-foreground transition-transform duration-300 group-hover:scale-y-100" />

                {/* Icon */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-foreground/70 transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/50 group-hover:text-foreground sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4" />
                </span>

                {/* Content */}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground transition-colors duration-200 sm:text-base">
                    {label}
                  </span>

                  <span className="block truncate text-xs text-muted-foreground transition-colors duration-200 sm:text-sm group-hover:text-foreground/80">
                    {description}
                  </span>
                </span>

                {/* Arrow */}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            )
          )}
        </div>

        {/* Availability */}
        <div className="mt-6 flex items-center gap-2 eyebrow">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/30" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground/60" />
          </span>

          <span>Open to building cool things</span>
        </div>
      </div>
    </section>
  );
}