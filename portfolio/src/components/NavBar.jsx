import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-indigo-500">
          Portfolio
        </h1>

        <div className="flex gap-6 text-gray-300">
          <NavLink to="/" className="hover:text-indigo-500">Home</NavLink>
          <NavLink to="/about" className="hover:text-indigo-500">About</NavLink>
          <NavLink to="/projects" className="hover:text-indigo-500">Projects</NavLink>
          <NavLink to="/skills" className="hover:text-indigo-500">Skills</NavLink>
          <NavLink to="/contact" className="hover:text-indigo-500">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
