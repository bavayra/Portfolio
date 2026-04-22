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
      { root: null, threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 text-sm desktop-xl:py-4 text-text font-medium w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      inert={!visible || undefined}
    >
      <div
        className={` flex items-center justify-end w-full ${visible ? "bg-bg/90 shadow-sm backdrop-blur" : "bg-transparent"} `}
      >
        <nav className="phone-lg:py-2 mx-auto" aria-label="Main navigation">
          <ul className="flex gap-0 desktop-sm:gap-x-4 ">
            <li className="hover:scale-110 active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#main-content"
                className="inline-flex py-2.5 px-3 text-base focus:outline-none text-accent-red font-bold focus-visible:ring-2 active:text-grey-3 focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-lg focus-visible:ring-offset-bg hover:text-grey-3 "
              >
                HOME
              </a>
            </li>
            <li className="hover:text-accent-red hover:scale-110 active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#about-section"
                className="inline-flex p-3 focus:outline-none focus-visible:ring-2 active:text-grey-3  focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-lg focus-visible:ring-offset-bg"
              >
                ABOUT
              </a>
            </li>
            <li className="hover:text-accent-red hover:scale-110 active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#projects-section"
                className="inline-flex p-3 focus:outline-none focus-visible:ring-2 active:text-grey-3  focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-lg focus-visible:ring-offset-bg"
              >
                PROJECTS
              </a>
            </li>
            <li className="hover:text-accent-red hover:scale-110  active:scale-95 duration-300 hover:font-semibold">
              <a
                href="#contacts-section"
                className="inline-flex p-3 focus:outline-none focus-visible:ring-2 active:text-grey-3 focus-visible:ring-accent-red focus-visible:ring-offset-4 focus-visible:rounded-lg focus-visible:ring-offset-bg"
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
