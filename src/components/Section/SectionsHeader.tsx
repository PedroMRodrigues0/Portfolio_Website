interface SectionsHeaderProps {
  Title: string;
  SubTitle: string;
}

const SectionsHeader = ({ Title, SubTitle }: SectionsHeaderProps) => {
  return (
    <div className="TextContainer flex w-full flex-col items-center md:p-2 gap-3 mb-20 mt-8">
      <h1 className=" font-manrope font-extrabold text-center text-xl md:text-4xl text-zinc-100">
        {Title}
      </h1>
      <h3 className=" font-manrope font-medium text-md md:text-lg text-center text-zinc-200">
        {SubTitle}
      </h3>
    </div>
  );
};

export default SectionsHeader;
