import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface LanguageCardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  nameTag: string;
}

const LanguageCard = ({ children, nameTag }: LanguageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
        ease: "easeInOut",
      }}
      className=" col-span-1 row-span-1 flex flex-col items-center gap-2"
    >
      {children}
      <p className="font-manrope text-lg font-semibold text-zinc-50">
        {nameTag}
      </p>
    </motion.div>
  );
};

export default LanguageCard;
