import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Card = ({
  children,
  pinTitle,
  title,
  date,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  pinTitle?: string;
  title?: string;
  date?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleResetTransform = () => {
    // Reset transform after 2 seconds of no interaction
    timeoutRef.current = setTimeout(() => {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    }, 2000);
  };

  useEffect(() => {
    if (isIntersecting) {
      setTransform("translate(-50%,-50%) rotateX(30deg) scale(0.8)");
      handleResetTransform();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      {
        // Trigger when 50% of the card is visible
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cardRef]);

  const handleMouseEnter = () => {
    // Cancel the reset if user hovers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTransform("translate(-50%,-50%) rotateX(30deg) scale(0.8)");
  };

  const handleMouseLeave = () => {
    handleResetTransform();
  };

  return (
    <a
      ref={cardRef}
      className={cn(
        "relative group/pin z-50  cursor-pointer ",
        containerClassName
      )}
      href={href || "/"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2  mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-gradient-to-br from-zinc-800 via-zinc-800 to-zinc-900 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:p-4 sm:basis-1/2 max-sm:h-[300px] max-sm:w-[260px] w-[320px] h-[320px] ">
              <h3 className=" font-bold font-manrope text-xl text-zinc-100">
                {title}
              </h3>
              <div className="text-base font-manrope font-normal">
                <span className="text-slate-500 ">{date}</span>
              </div>
              <div className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-500">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PinPerspective
        isVisible={
          isIntersecting &&
          transform !== "translate(-50%,-50%) rotateX(0deg) scale(1)"
        }
        title={pinTitle}
        href={href}
      />
    </a>
  );
};

export const PinPerspective = ({
  title,
  isVisible,
}: {
  title?: string;
  href?: string;
  isVisible?: boolean;
}) => {
  return (
    <motion.div
      className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div className="relative flex space-x-2 items-center max-sm:top-4 max-sm:right-12 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute max-sm:left-[-50px] left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute max-sm:left-[-50px] left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute max-sm:left-[-50px] left-1/2 right-8 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute max-sm:left-36 max-sm:right-3 right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-zinc-900 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute max-sm:left-36 max-sm:right-3 right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-zinc-300 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute max-sm:left-36 max-sm:right-3 right-1/2 translate-x-[1.5px] bottom-1/2 bg-zinc-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute max-sm:left-36 max-sm:right-3 right-1/2 translate-x-[0.5px] bottom-1/2 bg-zinc-400 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
