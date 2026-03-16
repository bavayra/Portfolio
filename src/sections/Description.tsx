import { Divider } from "../components/Divider";

export const Description = () => {
  return (
    <section className="relative h-[84vh] desktop-lg:ml-10 desktop-sm:h-[70vh] desktop-lg:h-[60vh] tablet-lg:h-[48vh] desktop-xl:h-[56vh] tablet-sm:ml-12 min-[375px]:h-[92vh] tablet-md:h-[52vh] min-[390px]:h-[70vh] phone-md:max-h-[74vh] min-[428px]:h-[68vh] phone-lg:h-[72vh] py-8 ml-3">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-lg-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">03</p>
      <h2 className="text-2xl text-grey-2 desktop-xl:text-5xl desktop-sm:text-4xl tablet-md:my-2 phone-lg:text-4xl tablet-md:text-5xl font-medium phone-sm:text-3xl">
        WHAT IS SHE LIKE
      </h2>
      <p className="mt-2 desktop-xl:max-w-120 desktop-xl:text-xl desktop-sm:max-w-92 desktop-sm:text-base tablet-sm:text-lg tablet-md:max-w-116 tablet-sm:max-w-92 phone-md:max-w-80 text-xs phone-sm:text-sm phone-lg:pl-2 phone-md:text-base phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
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
        width={128}
        height={200}
        style={{ position: "absolute", right: 0, bottom: 0 }}
        loading="lazy"
        className="object-cover phone-md:w-36 desktop-xl:w-84 desktop-sm:w-72 desktop-sm:mr-24 phone-lg:w-40 tablet-sm:w-48 tablet-md:w-60"
      />
    </section>
  );
};

export default Description;
