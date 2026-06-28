"use client";

export default function FooterStandard() {
  return (
    <footer className="w-full bg-background -mt-10">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-0">
          <blockquote>
            <p className="max-w-2xl text-2xl sm:text-3xl leading-[1.45] tracking-tight text-foreground">
              &ldquo;Build your own internal compass for navigating new
              territories.&rdquo;
            </p>

            <div className="mt-5 sm:mt-6 flex justify-end">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-px w-6 sm:w-8 bg-border" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Kartikey
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>
    </footer>
  );
}
