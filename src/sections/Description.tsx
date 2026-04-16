const Description = () => {
  return (
    <section className="relative py-8 ml-3 tablet-sm:ml-12 desktop-lg:ml-10">
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-2 phone-md:gap-x-4">
        <div>
          <p
            className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-md:text-3xl desktop-xl:text-4xl"
            aria-hidden="true"
          >
            03
          </p>
          <h3 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl phone-lg:text-4xl tablet-md:text-5xl tablet-md:my-2 desktop-sm:text-4xl desktop-xl:text-5xl">
            WHAT IS SHE LIKE
          </h3>
          <p className="mt-2 text-body-sm text-text leading-loose tracking-wide ml-3 w-full max-w-60 break-words whitespace-normal phone-sm:max-w-[17rem] phone-md:max-w-80 phone-md:text-base phone-lg:pl-2 phone-lg:max-w-[19rem] tablet-sm:max-w-[20.5rem] tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32rem] desktop-xl:text-2xl  border-l-2 border-grey-2">
            I'm a curious and disciplined developer who enjoys solving UI
            problems with clean, maintainable code. I prioritize performance and
            accessibility, and I'm committed to continuous learning. I work well
            in teams, bringing empathy and adaptability to collaborations. I'm
            detail-oriented and strive for perfection, learn quickly, and stay
            self-motivated to deliver reliable results.
          </p>
        </div>

        <img
          src="/AuthorImgAI.webp"
          alt="AI-generated portrait of the author"
          width={128}
          height={200}
          loading="eager"
          className="object-cover self-end w-24 phone-md:w-36 phone-lg:w-44 phone-lg:-mr-3 tablet-sm:w-[12.5rem] tablet-md:w-60 desktop-sm:w-[19.5rem] desktop-sm:mr-24 desktop-xl:w-[27rem]"
        />
      </div>
    </section>
  );
};

export default Description;
