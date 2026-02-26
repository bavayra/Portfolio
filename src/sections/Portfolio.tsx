import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const Portfolio = () => {
  return (
    <section className="relative h-auto py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={192}
        leftPx={0}
        color="grey-2"
        topPx={100}
      />
      <p className="text-text phone-sm:text-xl">08</p>
      <h2 className="text-2xl phone-sm:text-3xl text-grey-2 font-medium">
        THIS PORTFOLIO <span className="text-accent-red font-bold">:)</span>
      </h2>
      <p className="mt-2 text-xs phone-sm:text-sm phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
        A responsive, performance‑focused personal portfolio showcasing my
        projects, process and measurable improvements. Built with modern tooling
        to demonstrate UI implementation, accessibility and deployment
        practices.
      </p>
      <GitHubLink />
    </section>
  );
};

export default Portfolio;
