import GithubDashboard from "./dashboard/GithubDashboard";
import RevealOnScroll from "./RevealOnScroll";

const GithubSection = () => {
  return (
    <section
      className="w-full overflow-x-hidden bg-transparent py-12 sm:py-14 lg:py-16 p-2"
      id="github"
    >
      <div className="mx-auto max-w-3xl">
        <RevealOnScroll>
          <div className="relative w-full overflow-x-auto">
            <div className="min-w-full">
              <GithubDashboard />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default GithubSection;
