import { useEffect, useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0.05 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 text-xs min-[360px]:text-base text-text font-medium  min-[360px]:py-2 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={` flex items-center justify-end w-full ${visible ? "bg-[var(--color-bg)/90] shadow-sm backdrop-blur" : "bg-transparent"} `}
      >
        <nav className="pr-4 ">
          <ul className="flex gap-0">
            <li className="hover:text-accent-red hover:scale-110 active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#about"
                className="inline-flex px-3 py-2 focus:outline-none focus-visible:ring-2 active:text-grey-3  focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-md focus-visible:ring-offset-white"
              >
                ABOUT
              </a>
            </li>
            <li className="hover:text-accent-red hover:scale-110 active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#projects"
                className="inline-flex px-3 py-2 focus:outline-none focus-visible:ring-2 active:text-grey-3  focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-md focus-visible:ring-offset-white"
              >
                PROJECTS
              </a>
            </li>
            <li className="hover:text-accent-red hover:scale-110  active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#contacts"
                className="inline-flex px-3 py-2 focus:outline-none focus-visible:ring-2 active:text-grey-3 focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-md focus-visible:ring-offset-white"
              >
                CONTACTS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
