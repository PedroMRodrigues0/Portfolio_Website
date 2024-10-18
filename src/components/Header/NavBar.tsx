const NavBar = () => {
  return (
    <nav className="flex self-center rounded-lg ring-1 ring-zinc-500/50 p-3 backdrop-blur-2xl">
      <ul className=" flex flex-row gap-10 font-manrope font-semibold text-md text-zinc-800 ">
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <a href="">Home</a>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <a href="">Education</a>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <a href="">Experience</a>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <a href="">Projects</a>
        </li>
        <li className=" p-1 hover:text-zinc-200 hover:font-bold transition-colors">
          <a href="">Languages</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
