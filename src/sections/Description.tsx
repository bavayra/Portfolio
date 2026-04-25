const Description = () => {
  return (
    <section
      id="description"
      aria-labelledby="description-heading"
      className="relative py-8 tablet-sm:ml-6 desktop-lg:ml-10 mb-4 tablet-md:mb-10"
    >
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-2 phone-md:gap-x-4">
        <div>
          <div className="leading-6.5 ml-3 phone-lg:leading-7.5 tablet-sm:leading-8.5 tablet-md:leading-6.5">
            <p
              className="text-text text-(length:--font-page-number)"
              aria-hidden="true"
            >
              03
            </p>
            <h3
              id="description-heading"
              className="text-[2.75rem] text-grey-2 font-medium tablet-md:my-2 desktop-sm:text-4xl desktop-xl:text-5xl"
            >
              WHAT AM I LIKE
            </h3>
          </div>
          <p
            className="mt-2 text-(length:--font-body-sm) text-text leading-loose tracking-wide ml-3 w-full wrap-break-word  phone-lg:mt-4 whitespace-normal max-w-(--max-w-text-sm) desktop-sm:max-w-(--max-w-text-lg) desktop-xl:text-2xl border-l-2 pl-2 border-grey-2"
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

        <img
          src="/AuthorImg.webp"
          alt="Alix Bell"
          width={768}
          height={1152}
          loading="lazy"
          className="object-cover self-end phone-lg:-mr-3 desktop-sm:mr-24 w-(--author-img-size)"
        />
      </div>
    </section>
  );
};

export default Description;
