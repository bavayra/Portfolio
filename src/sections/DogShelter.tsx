import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const DogShelter = () => {
  return (
    <section className="relative h-auto py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={216}
        leftPx={0}
        color="grey-medium"
        topPx={100}
      />
      <p className="text-text">06</p>
      <h2 className="text-2xl text-grey-medium font-medium">DOG SHELTER WEB</h2>
      <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
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
