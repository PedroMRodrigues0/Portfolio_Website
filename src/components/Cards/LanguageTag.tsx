import React, { ReactNode } from "react";

interface LanguageTagProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

const LanguageTag = ({ children }: LanguageTagProps) => {
  return (
    <div className="inline-flex h-9 items-center justify-center bg-teal-900 py-[7px] px-4  rounded-xl">
      <p className="font-manrope font-normal max-sm:text-xs text-sm text-teal-300">
        {children}
      </p>
    </div>
  );
};

export default LanguageTag;
