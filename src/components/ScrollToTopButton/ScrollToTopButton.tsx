import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    showButton && (
      <button
        className=" fixed bottom-12 right-10 md:right-12 justify-center items-center rounded-md p-1 ring-1 ring-zinc-600 backdrop-blur-lg opacity-80 active:scale-90 active:opacity-70"
        onClick={scrollToTop}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.144"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 4.5L17 9.5M12 4.5L7 9.5M12 4.5L12 11M12 14.5C12 16.1667 11 19.5 7 19.5"
              stroke="#f4f4f5"
              strokeWidth="2.232"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
