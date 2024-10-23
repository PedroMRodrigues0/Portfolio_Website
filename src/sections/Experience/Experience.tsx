import { motion } from "framer-motion";
import SectionsHeader from "../../components/Section/SectionsHeader";
import SectionContainer from "../../components/Section/SectionContainer";

const Experience = () => {
  return (
    <SectionContainer
      id="experience"
      BackgroundColor="bg-zinc-800"
      Children={
        <>
          <SectionsHeader
            Title="Professional Experience"
            SubTitle=" Discover the experiences that have shaped my professional journey"
          />
          <motion.div
            initial={{ opacity: 0.0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="TextContainer flex flex-col md:px-20 "
          >
            <div className="Title flex flex-col gap-y-2">
              <h1 className=" font-manrope font-extrabold max-sm:text-2xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-white">
                Internship Experience at TechWelf
              </h1>
              <h3 className=" font-manrope max-sm:text-sm font-semibold text-zinc-400">
                September 2023 - September 2024
              </h3>
            </div>

            <p className="font-manrope leading-8 text-left max-sm:text-md text-lg text-zinc-200 mt-5 mb-6">
              During my internship at TechWelf, I contributed to the development
              of a mobile application for efficient stock management, designed
              to streamline warehouse organization and inventory control. The
              project focused on enabling users to register incoming orders,
              monitor available products, and manage items ready for dispatch.
              Through this internship, I gained valuable experience working with
              technologies such as React Native, TypeScript, and Firebase.
              <br />
              <br />
              My roles on the project included designing the user interface for
              the mobile application, ensuring it was intuitive and accessible
              for warehouse receptionists and dispatch operators. Additionally,
              I worked on implementing features using React Tanstack Query for
              real-time data updates and integrated the app with the Moloni API
              to support invoicing and inventory management. I also collaborated
              with the development team using Git for version control and
              utilized Postman to test and validate API endpoints.
              <br />
              <br />
              This experience enhanced my skills in mobile app development, API
              integration, and collaborative software design, while allowing me
              to contribute to an impactful solution for inventory management.
            </p>
          </motion.div>
        </>
      }
    />
  );
};

export default Experience;
