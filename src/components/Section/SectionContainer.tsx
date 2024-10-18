import React, { ReactNode } from "react";

interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  Children: ReactNode;
  BackgroundColor: string;
}

const SectionContainer = ({
  Children,
  BackgroundColor,
}: SectionContainerProps) => {
  return (
    <section className={`${BackgroundColor}`}>
      <div className="MainContainer flex flex-col justify-center items-center p-7">
        {Children}
      </div>
    </section>
  );
};

export default SectionContainer;
