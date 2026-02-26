import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const DogShelter = () => {
  return (
    <section className="relative h-auto py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={216}
        leftPx={0}
        color="grey-2"
        topPx={100}
      />
      <p className="text-text phone-sm:text-xl">06</p>
      <h2 className="text-2xl text-grey-2 phone-sm:text-3xl font-medium">
        DOG SHELTER WEB
      </h2>
      <p className="mt-2 text-xs phone-sm:text-sm phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
        A responsive web app for a dog shelter built with React and TypeScript.
        It features a searchable pet gallery with different filters, adoption
        rules, contact/donation section, and accessible modals for each dog. The
        site is mobile‑first and performance‑minded.
      </p>
      <GitHubLink />
    </section>
  );
};

export default DogShelter;
