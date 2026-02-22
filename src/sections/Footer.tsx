const Footer = () => {
  return (
    <footer className="py-3 text-center text-xs text-white bg-grey-medium ">
      <p className="tracking-wider leading-relaxed">
        All Rights Reserved © {new Date().getFullYear()}
      </p>
      <p className="tracking-wider">Created by bavayra with ❤️</p>
    </footer>
  );
};

export default Footer;
