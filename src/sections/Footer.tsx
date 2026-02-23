const Footer = () => {
  return (
    <footer className="py-3 text-center text-[0.5rem] text-white bg-grey-medium ">
      <div className="grid grid-cols-[1fr_max-content_1fr] max-w-52 mx-auto text-[0.65rem]  text-grey-extra-dark font-semibold">
        <a href="tel:+15550100000" aria-label="Call example number">
          +1 (555) 010‑0000
        </a>
        <span className="text-accent-red font-bold">|</span>
        <p className="location" aria-label="Location: Prague, Czechia">
          Prague, Czechia
        </p>
      </div>
      <p className="tracking-wider leading-relaxed">
        All Rights Reserved © {new Date().getFullYear()}
      </p>
      <p className="tracking-wider">Created by bavayra with ❤️</p>
    </footer>
  );
};

export default Footer;
