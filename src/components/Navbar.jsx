import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-black h-25 bg-neutral-100 w-full flex items-start flex-col justify-center gap-2 px-5">
      <h1 className="text-3xl font-bold">Mohit Chauhan</h1>
      <div className="nav_links flex gap-5 text-neutral-500 text-lg">
        <Link className="hover:text-neutral-600" to="/">
          Home
        </Link>
        <Link className="hover:text-neutral-600" to="/about">
          About
        </Link>
        <Link className="hover:text-neutral-600" to="/skills">
          Skills
        </Link>
        <Link className="hover:text-neutral-600" to="/projects">
          Projects
        </Link>
        <Link className="hover:text-neutral-600" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
