import { movies, moviesMeta } from "@/app/data";

export const metadata = {
  title: "Movies",
  description:
    "A curated list of movies that align with how I think — problem solving, systems, and human decisions under pressure.",
  keywords: [
    "movies",
    "sci-fi",
    "engineering",
    "systems thinking",
    "watchlist",
    "film recommendations",
    "technology",
    "space",
  ],
  openGraph: {
    title: "Movies | Kartikey",
    description:
      "A curated list of movies that align with how I think — problem solving, systems, and human decisions under pressure.",
    url: "https://kartikey.dev/movies",
  },
};

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8 py-16">
        <header className="mb-12">
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase mb-4">
            {moviesMeta.identity.join(" · ")}
          </p>

          <h1 className="text-lg font-semibold rounded-sm sm:text-3xl">
            {moviesMeta.headline}
          </h1>

          <p className="mt-2 text-md text-muted-foreground">
            {moviesMeta.subtext}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-mono uppercase tracking-[0.15em]">
            {moviesMeta.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-sm border border-border/30 text-muted-foreground/60 hover:text-foreground hover:border-border transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-4 md:-ml-5 -ml-3">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="p-3 sm:p-5 lg:p-6"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-mono text-muted-foreground/50 mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground sm:text-xl group-hover:text-primary transition-colors">
                      {movie.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground sm:text-xs">
                      <span>{movie.year}</span>
                      <span className="text-muted-foreground/30">·</span>
                      {movie.genre.map((g, i) => (
                        <span key={i}>
                          {g}
                          {i < movie.genre.length - 1 && (
                            <span className="text-muted-foreground/30">
                              {" "}
                              ·{" "}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {movie.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-border/20">
          <p className="text-sm italic text-muted-foreground/60 leading-relaxed">
            {moviesMeta.quote.split(" — ")[0]}
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/30 mt-2 tracking-wider">
            — {moviesMeta.quote.split(" — ")[1]}
          </p>
        </footer>
      </div>
    </div>
  );
}
