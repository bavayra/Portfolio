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
      className={`fixed top-0 text-xs text-grey-dark font-medium left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`py-2 flex items-center justify-end w-full ${visible ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"}`}
      >
        <nav className="pr-4">
          <ul className="flex gap-4">
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACTS</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
