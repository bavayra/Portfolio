const Footer = () => {
  return (
    <footer className="py-3 text-center text-[0.85rem] max-w-full opacity-65 font-semibold text-grey-1 bg-section-title-bg tablet-sm:text-sm">
      <p>Prague, Czechia</p>
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
