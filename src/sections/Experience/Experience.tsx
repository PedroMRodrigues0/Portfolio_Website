import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className=" bg-zinc-800">
      <div className="MainContent w-full flex flex-col justify-center items-center gap-y-20 p-7">
        <div className="HeaderTextContainer flex flex-col items-center justify-center p-2 gap-3 mt-8">
          <h1 className=" font-manrope font-extrabold text-4xl text-zinc-100">
            Professional Experience
          </h1>
          <h3 className=" font-manrope font-medium text-lg text-center text-zinc-200">
            Discover the experiences that have shaped my professional journey
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="TextContainer flex flex-col w-[70%] md:px-20 "
        >
          <div className="Title flex flex-col gap-y-2">
            <h1 className=" font-manrope font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-white">
              Internship Experience at TechWelf
            </h1>
            <h3 className=" font-manrope font-lg font-semibold text-zinc-400">
              September 2023 - September 2024
            </h3>
          </div>

          <h4 className="font-manrope leading-8 text-left text-lg text-zinc-200 mt-5 mb-6">
            During my internship at TechWelf, I contributed to the development
            of a mobile application for efficient stock management, designed to
            streamline warehouse organization and inventory control. The project
            focused on enabling users to register incoming orders, monitor
            available products, and manage items ready for dispatch. Through
            this internship, I gained valuable experience working with
            technologies such as React Native, TypeScript, and Firebase.
            <br />
            <br />
            My roles on the project included designing the user interface for
            the mobile application, ensuring it was intuitive and accessible for
            warehouse receptionists and dispatch operators. Additionally, I
            worked on implementing features using React Tanstack Query for
            real-time data updates and integrated the app with the Moloni API to
            support invoicing and inventory management. I also collaborated with
            the development team using Git for version control and utilized
            Postman to test and validate API endpoints.
            <br />
            <br />
            This experience enhanced my skills in mobile app development, API
            integration, and collaborative software design, while allowing me to
            contribute to an impactful solution for inventory management.
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
