const Footer = () => {
  return (
    <footer className="py-3 text-center text-[0.75rem] max-w-52 mx-auto opacity-65 font-semibold border-t-2 border-accent-red text-grey-1 bg-section-title-bg tablet-sm:text-sm">
      <p className="location">Prague, Czechia</p>
      <p className="tracking-wider leading-relaxed opacity-65 desktop-xl:text-lg">
        All Rights Reserved © {new Date().getFullYear()}
      </p>
      <p className="tracking-wider opacity-65 desktop-xl:text-lg">
        Created by Alix Bell with ❤️
      </p>
    </footer>
  );
};

export default Footer;
