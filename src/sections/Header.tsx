const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="text-lg font-bold">Your Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
