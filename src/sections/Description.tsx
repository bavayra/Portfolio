import { Divider } from "../components/Divider";

export const Description = () => {
  return (
    <section className="relative h-130 py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={396}
        leftPx={0}
        color="grey-2"
        topPx={100}
      />
      <p className="text-text phone-sm:text-xl">03</p>
      <h2 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl">
        WHAT IS SHE LIKE
      </h2>
      <p className="mt-2 min-[480px]:max-w-80 text-xs phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
        I'm a curious and disciplined developer who enjoys solving UI problems
        with clean, maintainable code. I prioritize performance and
        accessibility, and I'm committed to continuous learning. I work well in
        teams, bringing empathy and adaptability to collaborations. I'm
        detail-oriented and strive for perfection, learn quickly, and stay
        self-motivated to deliver reliable results.
      </p>
      <img
        src="/fonts/images/AuthorImgAI.webp"
        alt="AI-generated portrait of the author"
        width={140}
        height={200}
        style={{ position: "absolute", right: 0, bottom: 0 }}
        loading="lazy"
        className="object-cover h-auto "
      />
    </section>
  );
};

export default Description;
