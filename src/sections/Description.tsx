const Description = () => {
  return (
    <section
      id="description"
      aria-labelledby="description-heading"
      className="relative py-8 tablet-sm:ml-6 tablet-md:mb-10 desktop-lg:ml-7 mb-4 desktop-sm:-mt-64 desktop-md:-mt-72 desktop-xl:mb-20 [@media(min-width:1920px)_and_(min-height:1440px)]:-mt-60"
    >
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-2 phone-md:gap-x-4">
        <div>
          <div className="leading-6.5 ml-3 phone-lg:leading-7.5 tablet-sm:leading-8.5">
            <p
              className="text-text text-(length:--font-page-number) desktop-md:text-[1.75rem]"
              aria-hidden="true"
            >
              03
            </p>
            <h3
              id="description-heading"
              className="text-[2.75rem] text-grey-2 font-medium desktop-sm:text-5xl desktop-xl:text-5xl"
            >
              WHAT AM I LIKE
            </h3>
          </div>
          <p
            className="mt-2 text-(length:--font-body-sm) text-text leading-loose tracking-wide ml-3 w-full wrap-break-word  phone-lg:mt-4 whitespace-normal max-w-(--max-w-text-sm) desktop-sm:max-w-(--max-w-text-lg) desktop-xl:text-lg border-l-2 [@media(min-width:1920px)_and_(min-height:1440px)]:text-xl pl-2 border-grey-2"
            style={{ borderLeftWidth: "var(--hero-div-w)" }}
          >
            I'm a curious and disciplined developer who enjoys solving UI
            problems with clean, maintainable code. I prioritize performance and
            accessibility, and I'm committed to continuous learning. I work well
            in teams, bringing empathy and adaptability to collaborations. I'm
            detail-oriented and strive for perfection, learn quickly, and stay
            self-motivated to deliver reliable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
