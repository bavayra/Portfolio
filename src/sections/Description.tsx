import { Divider } from "../components/Divider";

export const Description = () => {
  return (
    <section className="relative h-screen phone-sm:h-[84vh] min-[375px]:h-[92vh] tablet-sm:ml-12 tablet-lg:h-[40vh] desktop-sm:h-[68vh] desktop-lg:h-[60vh] desktop-lg:ml-10 desktop-xl:h-[64vh] tablet-md:h-[44vh] min-[390px]:h-[70vh] phone-md:max-h-[74vh] min-[428px]:h-[68vh] phone-lg:h-[63vh] tablet-sm:h-[55vh] py-8 ml-3">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-sm-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-md:text-3xl desktop-xl:text-4xl">
        03
      </p>
      <h2 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl  phone-lg:text-4xl tablet-md:text-5xl tablet-md:my-2 desktop-sm:text-4xl desktop-xl:text-5xl">
        WHAT IS SHE LIKE
      </h2>
      <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal phone-sm:text-sm phone-sm:max-w-[17rem] phone-md:max-w-80 phone-md:text-base phone-lg:pl-2 phone-lg:max-w-[19rem] tablet-sm:max-w-[20.5rem] tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32rem] desktop-xl:text-2xl">
        I'm a curious and disciplined developer who enjoys solving UI problems
        with clean, maintainable code. I prioritize performance and
        accessibility, and I'm committed to continuous learning. I work well in
        teams, bringing empathy and adaptability to collaborations. I'm
        detail-oriented and strive for perfection, learn quickly, and stay
        self-motivated to deliver reliable results.
      </p>
      <img
        src="/AuthorImgAI.webp"
        alt="AI-generated portrait of the author"
        width={128}
        height={200}
        style={{ position: "absolute", right: 0, bottom: 0 }}
        loading="lazy"
        className="object-cover phone-md:w-36 phone-lg:w-44 phone-lg:-mr-3  tablet-sm:w-[12.5rem] tablet-md:w-60 desktop-sm:w-[19.5rem] desktop-sm:mr-24 desktop-xl:w-[27rem] "
      />
    </section>
  );
};

export default Description;
