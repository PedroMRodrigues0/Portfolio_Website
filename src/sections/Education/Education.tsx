import { Card } from "../../components/Cards/Card";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionsHeader from "../../components/Section/SectionsHeader";

const Education = () => {
  return (
    <SectionContainer
      BackgroundColor="bg-zinc-700"
      Children={
        <>
          <SectionsHeader
            Title="Academic Education"
            SubTitle="Institutions of learning that have played a role in building my
            academic foundation."
          />
          <div className="CardsContainer grid grid-cols-2 max-md:grid-cols-1 mb-20 gap-16 ">
            <Card
              className=" col-span-1"
              pinTitle="/aemirandela.pt"
              title="Science and Technology"
              date="2017 - 2020"
              href="https://aemirandela.pt/"
            >
              <img
                className=" object-contain"
                src="/src/assets/80-150.png"
                alt="Aem Image"
              />
            </Card>
            <Card
              className=" col-span-1"
              pinTitle="/estig.ipb.pt"
              title="Graduation, Computer Science"
              date="September 2020 - September 2024"
              href="https://estig.ipb.pt/"
            >
              <img
                className=" object-contain"
                src="/src/assets/ipb_logo.png"
                alt="Ipb Image"
              />
            </Card>
          </div>
        </>
      }
    />
  );
};

export default Education;
