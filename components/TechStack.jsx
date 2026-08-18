import { Badge } from "@/components/ui/badge";
import ThemedSkillIcon from "@/components/ThemedSkillIcon";

import { technologies, techCategories, highlightsData } from "@/app/data";

export default function AboutMeSection() {
  return (
    <section
      id="how-i-build"
      className="w-full overflow-x-hidden bg-background py-12 sm:py-14 lg:py-16 p-2"
    >
      <div className="mx-auto max-w-3xl">
        <div className="space-y-8 mb-6">
          <h2 className="heading-lg">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-12">
          {/* Skills Section */}
          <div className="space-y-6 w-full">
            {techCategories.map((category) => {
              const categoryTech = technologies.filter(
                (skill) => skill.category === category
              );

              if (categoryTech.length === 0) return null;

              return (
                <div key={category} className="space-y-3">
                  <h3 className="eyebrow">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categoryTech.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-dashed border-2 bg-transparent px-4 py-2 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <ThemedSkillIcon skill={skill} />

                          <span className="hidden sm:inline font-mono">
                            {skill.iconname}
                          </span>
                        </div>
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Who Am I Section */}
          <div className="w-full space-y-5 border-t border-border/50 pt-8 sm:pt-10">
            <div className="space-y-1">
              <p className="eyebrow">
                Who Am I
              </p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Kartikey Bhatnagar
                </h4>
              </div>
            </div>

            <div className="space-y-5 border-l-2 border-foreground/30 pl-4 sm:pl-6">
              {highlightsData[0].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "text-sm leading-relaxed text-foreground/90 sm:text-base"
                      : "text-sm leading-relaxed text-muted-foreground sm:text-base"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
