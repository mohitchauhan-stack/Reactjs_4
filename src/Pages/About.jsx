import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="h-150 w-full flex justify-center items-center text-4xl font-bold gap-5 flex-col">
      <div className="flex gap-8">
        <Link to="/about/links">Links</Link>
        <Link to="/about/winks">Winks</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
