import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="flex self-center rounded-lg ring-1 ring-zinc-500/50 p-3 backdrop-blur-2xl">
      <ul className=" flex flex-row gap-10 font-manrope font-semibold text-sm xl:text-md text-zinc-800 xl ">
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <Link
            to="education"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <Link
            to="experience"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <Link
            to="languages"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Languages
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
