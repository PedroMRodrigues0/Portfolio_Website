interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <nav
      className={`absolute ${
        isOpen ? "flex" : "hidden"
      } top-16 right-2 min-w-40 rounded-md p-2 backdrop-blur-2xl md:hidden`}
    >
      <ul className=" w-full">
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <a href="">Home</a>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <a href="">Education</a>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <a href="">Experience</a>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <a href="">Projects</a>
        </li>
        <li className="flex w-full items-center h-9 px-4 text-sm font-semibold tracking-wide rounded-md text-zinc-50/50 hover:bg-zinc-50/50  hover:text-zinc-800 active:scale-95 active:duration-500 transition-colors">
          <a href="">Languages</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
