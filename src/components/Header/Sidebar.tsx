import { Link } from "react-scroll";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <nav
      className={`absolute ${
        isOpen ? "flex" : "hidden"
      } top-16 right-2 min-w-40 rounded-md p-2 backdrop-blur-2xl lg:hidden`}
    >
      <ul className=" w-full">
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="education"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="experience"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className=" cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
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

export default Sidebar;
