const Footer = () => {
  return (
    <footer className="py-3 text-center text-[0.75rem] max-w-52 mx-auto opacity-65 font-semibold border-t-2 border-accent-red text-grey-1 bg-section-title-bg tablet-sm:text-sm">
      <div className="grid grid-cols-[1fr_max-content_1fr] tablet-sm:text-sm tablet-sm:max-w-64 desktop-xl:text-xl desktop-xl:max-w-[23rem]">
        <a href="tel:+420774640788">+420 774 640 788</a>
        <span className="text-accent-red font-bold text-lg -mt-1 pl-1 tablet-sm:text-2xl">
          |
        </span>
        <p className="location">Prague, Czechia</p>
      </div>
      <p className="tracking-wider leading-relaxed opacity-65 desktop-xl:text-lg">
        All Rights Reserved © {new Date().getFullYear()}
      </p>
      <p className="tracking-wider opacity-65 desktop-xl:text-lg">
        Created by bavayra with ❤️
      </p>
    </footer>
  );
};

export default Footer;
