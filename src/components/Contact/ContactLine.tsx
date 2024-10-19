import { ReactNode } from "react";

interface ContactLineProps extends React.HTMLProps<HTMLDivElement> {
  name: string;
  nameContent: string;
  icon: ReactNode;
  url?: string;
}

const ContactLine = ({ name, nameContent, icon, url }: ContactLineProps) => {
  return (
    <div
      className={`${name} flex flex-row items-center gap-2 hover:translate-x-5 hover:duration-150 hover:cursor-pointer duration-150`}
    >
      {icon}
      <a className=" text-zinc-200" href={url}>
        {nameContent}
      </a>
    </div>
  );
};

export default ContactLine;
