import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/Section/aurora-background";
import Header from "../Header/Header";
import ContactLine from "../../components/Contact/ContactLine";

export const Home = () => {
  return (
    <section id="home" className="relative">
      <AuroraBackground>
        <motion.div
          className="w-full"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Header />
          <div className="ContentContainer grid md:grid-cols-2">
            <div className="LeftContainer flex flex-col px-10 lg:pl-20 col-span-1 max-lg:col-span-2 justify-center">
              <div className="WorkContainer flex flex-row items-center gap-2 mb-3 pl-[2px]">
                <img
                  className=" h-8 w-7 rounded-md"
                  src="/src/assets/ProfileImage1.JPG"
                  alt="PersonalImage"
                />
                <div className="Ping flex h-2 w-2 bg-green-500 rounded-full items-center justify-center ">
                  <div className=" h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className=" text-zinc-400 font-manrope">
                  Available for work
                </p>
              </div>
              <div className="MainText">
                <h1 className="font-bold text-7xl max-lg:text-6xl mb-2 font-manrope text-zinc-200">
                  Pedro Rodrigues
                </h1>
                <h1 className=" font-extrabold text-7xl max-md:text-5xl max-lg:text-6xl font-manrope text-zinc-300 text-opacity-70">
                  I'm a Web Developer
                </h1>
              </div>

              <div className="Divider h-[1px] w-[93%] bg-zinc-200 rounded-sm mt-8 ml-[5px] "></div>

              <div className="ContactContainer ">
                <h2 className=" font-normal text-2xl max-md:text-xl mb-4 font-manrope text-zinc-200 ml-1 mt-8">
                  Contact me and explore my work
                </h2>
                <div className="ContactInfo inline-flex flex-col gap-y-5">
                  <ContactLine
                    name="GitHub"
                    nameContent="Github"
                    icon={
                      <svg
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                      </svg>
                    }
                    url="https://github.com/PedroMRodrigues0"
                  />
                  <ContactLine
                    name="Linkedin"
                    nameContent="Linkedin"
                    icon={
                      <svg
                        className=" ml-[2px]"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="25px"
                        height="25px"
                      >
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                      </svg>
                    }
                    url="http://www.linkedin.com/in/pedromateus0"
                  />
                  <ContactLine
                    name="Gmail"
                    nameContent="pedromgrodrigues0@gmail.com"
                    icon={
                      <svg
                        className=" ml-[2px]"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 5.5976562 6 L 18.402344 6 L 12 10 L 5.5976562 6 z M 5 8.6269531 L 12 13 L 19 8.6269531 L 19 18 L 5 18 L 5 8.6269531 z" />
                      </svg>
                    }
                  />
                </div>
              </div>
              <div className="ButtonCv flex mt-10 mb-10 max-md:justify-center xl:mb-0">
                <button className="buttonCV">DOWNLOAD CV</button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0.0, x: 100 }} // Start with position 100px to the left
              whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and normal position
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="ImageConatiner flex max-lg:hidden flex-grow flex-shrink basis-0 col-span-1 max-h-[800px] items-center"
            >
              <div className="Content flex w-full h-full">
                <img
                  className="object-cover w-full h-full opacity-70"
                  src="/src/assets/ProfileImage.png"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};
