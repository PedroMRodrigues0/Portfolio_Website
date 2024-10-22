import { Link } from "react-scroll";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <nav
      className={`absolute ${
        isOpen ? "flex" : "hidden"
      } top-16 right-2 min-w-40 rounded-md p-2 backdrop-blur-2xl lg:hidden`}
    >
      <ul className=" w-full">
        <li className="flex w-full items-center h-9 pl-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="w-full p-1 cursor-pointer"
            onClick={closeSidebar}
          >
            Home
          </Link>
        </li>
        <li className="flex w-full items-center pl-4 h-9 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="education"
            smooth={true}
            duration={600}
            className="p-1 w-full cursor-pointer"
            onClick={closeSidebar}
          >
            Education
          </Link>
        </li>
        <li className="flex w-full items-center h-9 pl-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="experience"
            smooth={true}
            duration={600}
            className=" w-full p-1 cursor-pointer"
            onClick={closeSidebar}
          >
            Experience
          </Link>
        </li>
        <li className="flex w-full items-center h-9 pl-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className=" w-full p-1 cursor-pointer"
            onClick={closeSidebar}
          >
            Projects
          </Link>
        </li>
        <li className="flex w-full items-center h-9 pl-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <Link
            to="languages"
            smooth={true}
            duration={600}
            className=" w-full p-1 cursor-pointer"
            onClick={closeSidebar}
          >
            Languages
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
