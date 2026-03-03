import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const Portfolio = () => {
  return (
    <section className="relative h-auto pt-8 pb-16 ml-3 tablet-sm:ml-12">
      <Divider
        widthPx={2}
        heightPx="var(--block-div-sm-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">08</p>
      <h2 className="text-2xl phone-sm:text-3xl phone-lg:text-4xl text-grey-2 font-medium">
        THIS PORTFOLIO <span className="text-accent-red font-bold">:)</span>
      </h2>
      <p className="mt-2 text-xs phone-lg:pl-2 phone-lg:max-w-80 tablet-sm:text-lg tablet-sm:max-w-92 phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
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
