import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className=" flex flex-row w-screen h-20 items-center p-2 ">
      <div className="flex-grow flex max-md:hidden justify-center">
        <NavBar />
      </div>

      <Sidebar isOpen={isSidebarOpen} />

      <button
        onClick={() => {
          toggleSidebarButton();
        }}
        className="topBarButton ml-auto p-1 backdrop-blur-2xl rounded-md ring-inset ring-1 ring-zinc-50/[0.02] md:hidden hover:bg-zinc-100/10 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#27272a"
        >
          <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
