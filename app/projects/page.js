import { SoundProjectCard } from "@/components/SoundLink";
import { projects } from "@/app/data";
import PathnameDisplay from "@/components/PathnameDisplay";

export default function ProjectsPage() {
  const reversedAll = [...projects].reverse();
  const recentProjects = reversedAll.slice(0, 5);
  const earlierProjects = reversedAll.slice(5);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl py-16">
        <div className="mb-12">
          <PathnameDisplay />
          <h1 className="heading-lg">Projects</h1>
          <p className="mt-2 body-text">
            Real projects. Real users. Real code.
          </p>
        </div>

        <section className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
            Recent
          </p>

          <div className="space-y-6">
            {recentProjects.map((project) => (
              <SoundProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
            Earlier
          </p>

          <div className="space-y-6">
            {earlierProjects.map((project) => (
              <SoundProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
