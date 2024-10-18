import React, { ReactNode } from "react";

interface LanguageCardProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  nameTag: string;
}

const LanguageCard = ({ children, nameTag }: LanguageCardProps) => {
  return (
    <div className=" col-span-1 row-span-1 flex flex-col items-center gap-2 hover:scale-105 hover:duration-200">
      {children}
      <p className="font-manrope text-lg font-semibold text-zinc-50">
        {nameTag}
      </p>
    </div>
  );
};

export default LanguageCard;
