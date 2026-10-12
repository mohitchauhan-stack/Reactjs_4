const Navbar = () => {
  return (
    <div className="text-black h-25 bg-neutral-100 w-full flex items-start flex-col justify-center gap-2 px-5">
      <h1 className="text-2xl font-bold">Mohit Chauhan</h1>
      <div className="nav_links flex gap-5 text-neutral-500">
        <a className="hover:text-neutral-600" href="/">
          Home
        </a>
        <a className="hover:text-neutral-600" href="/about">
          About
        </a>
        <a className="hover:text-neutral-600" href="/skills">
          Skills
        </a>
        <a className="hover:text-neutral-600" href="/projects">
          Projects
        </a>
        <a className="hover:text-neutral-600" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
