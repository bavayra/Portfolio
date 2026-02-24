const Footer = () => {
  return (
    <footer className="py-3 text-center text-[0.75rem] border-t-2 border-accent-red text-white bg-[#4f4f4f]">
      <div className="grid grid-cols-[1fr_max-content_1fr] max-w-52 mx-auto text-[0.75rem]  text-grey-1 font-semibold">
        <a href="tel:+15550100000" aria-label="Call example number">
          +1 (555) 010‑0000
        </a>
        <span className="text-accent-red font-bold text-lg -mt-1 pl-1">|</span>
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
