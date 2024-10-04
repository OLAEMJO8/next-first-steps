export const Navbar = () => {
  return (
    <nav className="flex bg-gray-500 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <a className="mr-2" href="/about">
        About
      </a>
      <a className="mr-2" href="/contacto">
        Contacto
      </a>
      <a className="mr-2" href="/pricing">
        Pricing
      </a>
    </nav>
  );
};
