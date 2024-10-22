import React, { ReactNode } from "react";

interface LanguageTagProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

const LanguageTag = ({ children }: LanguageTagProps) => {
  return (
    <div className="inline-flex h-9 items-center justify-center bg-teal-900 px-4 py-[7px] rounded-xl">
      <p className="font-manrope font-normal text-sm text-teal-300">
        {children}
      </p>
    </div>
  );
};

export default LanguageTag;
