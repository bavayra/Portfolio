const Description = () => {
  return (
    <section
      id="description"
      aria-labelledby="description-heading"
      className="relative py-8 tablet-sm:ml-6 tablet-md:mb-10 desktop-lg:ml-7 mb-4 desktop-sm:-mt-64 [@media(min-width:1024px)_and_(min-height:1366px)]:-mt-40 desktop-xl:mb-20 [@media(min-width:1920px)_and_(min-height:1440px)]:-mt-60"
    >
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-2 phone-md:gap-x-4">
        <div>
          <div className="leading-7.5 ml-3 tablet-sm:leading-8.5 desktop-2xl:leading-10">
            <p
              className="text-text text-[length:var(--font-page-number)] desktop-md:text-[1.75rem] desktop-2xl:text-[2.5rem]"
              aria-hidden="true"
            >
              03
            </p>
            <h3
              id="description-heading"
              className="text-[2rem] text-grey-2 font-medium phone-lg:text-[2.5rem] tablet-sm:text-[3rem] desktop-sm:text-5xl desktop-xl:text-5xl desktop-2xl:text-7xl"
            >
              WHAT AM I LIKE
            </h3>
          </div>
          <p
            className="mt-2 text-[length:var(--font-body-sm)] text-text leading-loose tracking-wide ml-3 w-full wrap-break-word  phone-lg:mt-4 whitespace-normal max-w-[var(--max-w-text-sm)] desktop-sm:max-w-[var(--max-w-text-lg)] tablet-lg:text-lg  desktop-2xl:text-2xl desktop-2xl:max-w-200 border-l-2 [@media(min-width:1920px)_and_(min-height:1440px)]:text-xl pl-2 border-grey-2"
            style={{ borderLeftWidth: "var(--hero-div-w)" }}
          >
            I'm a curious and disciplined developer who enjoys solving UI problems with clean, maintainable code. I prioritize performance
            and accessibility, and I'm committed to continuous learning. I work well in teams, bringing empathy and adaptability to
            collaborations. I'm detail-oriented and strive for perfection, learn quickly, and stay self-motivated to deliver reliable
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
