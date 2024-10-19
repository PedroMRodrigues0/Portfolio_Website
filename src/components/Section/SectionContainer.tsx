import React, { ReactNode } from "react";

interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  Children: ReactNode;
  BackgroundColor: string;
  id: string;
}

const SectionContainer = ({
  Children,
  BackgroundColor,
  id,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`${BackgroundColor}`}>
      <div className="MainContainer flex flex-col justify-center items-center p-7 pb-28">
        {Children}
      </div>
    </section>
  );
};

export default SectionContainer;
