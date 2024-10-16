import { Card } from "../../components/Card";

const Education = () => {
  return (
    <section className=" bg-zinc-700">
      <div className="MainContainer w-full h-full flex flex-col justify-center items-center p-7">
        <div className="TextContainer flex w-full flex-col items-center p-2 gap-3 mb-10 mt-8">
          <h1 className=" font-manrope font-extrabold text-4xl text-zinc-100">
            Academic Education
          </h1>
          <h3 className=" font-manrope font-medium text-lg text-center text-zinc-200">
            Institutions of learning that have played a role in building my
            academic foundation.
          </h3>
        </div>
        <div className="CardsContainer grid grid-cols-2 max-md:grid-cols-1 mb-20 gap-16 ">
          <Card
            className=" col-span-1"
            title="/aemirandela.pt"
            href="https://aemirandela.pt/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className=" font-bold font-manrope text-xl text-zinc-100">
                Sciene and Technology
              </h3>
              <div className="text-base font-manrope font-normal">
                <span className="text-slate-500 ">2027 - 2020</span>
              </div>
              <div className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-500">
                <img
                  className=" object-contain"
                  src="/src/assets/80-150.png"
                  alt="Aem Image"
                />
              </div>
            </div>
          </Card>
          <Card
            className=" col-span-1"
            title="/estig.ipb.pt"
            href="https://estig.ipb.pt/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className=" font-bold font-manrope text-xl text-zinc-100">
                Graduation, Computer Science
              </h3>
              <div className="text-base font-manrope font-normal">
                <span className="text-slate-500 ">
                  September 2020 - September 2024
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-500">
                <img
                  className=" object-contain"
                  src="/src/assets/ipb_logo.png"
                  alt="Ipb Image"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
