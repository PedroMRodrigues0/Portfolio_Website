const Footer = () => {
  return (
    <footer className=" bg-zinc-800 flex flex-wrap items-center justify-center p-6 sm:p-10">
      <p className=" font-manrope font-semibold text-zinc-50 max-sm:text-xs mr-1">
        © Copyright
      </p>
      <a
        className="font-manrope font-semibold max-sm:text-xs text-teal-500"
        href="https://github.com/PedroMRodrigues0"
      >
        PedroMRodrigues0
      </a>
      <p className="font-manrope font-semibold mr-1 max-sm:text-xs text-zinc-50">
        ,
      </p>
      <p className="font-manrope font-semibold max-sm:text-xs text-zinc-50">
        all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
