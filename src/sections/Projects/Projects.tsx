import LanguageTag from "../../components/Cards/LanguageTag";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionsHeader from "../../components/Section/SectionsHeader";
import { WobbleCard } from "../../components/Cards/wobble-card";

const Projects = () => {
  return (
    <SectionContainer
      id="projects"
      BackgroundColor="bg-zinc-700"
      Children={
        <>
          <SectionsHeader
            Title="Personal Projects"
            SubTitle="Explore some of the projects that shaped my programming skills"
          />
          <div className="GridContainer grid grid-cols-3 max-md:grid-cols-2 grid-rows-2 max-md:grid-rows-3 gap-6 ">
            <WobbleCard containerClassName="col-span-2 max-lg:col-span-3  row-span-1 bg-slate-800  rounded-2xl">
              <div className="main p-3">
                <div className="Title mb-5">
                  <h1 className=" font-manrope font-extrabold text-3xl text-zinc-100">
                    HotelReserve AI
                  </h1>
                </div>
                <div className="TextContainer">
                  <p className=" font-manrope font-medium leading-7 text-lg  text-zinc-200">
                    Developed a machine learning model using Support Vector
                    Machine (SVM) to predict hotel reservation cancellations
                    based on historical booking data.
                    <br />
                    The dataset was preprocessed using Pandas to handle
                    categorical variables and Scikit-learn for data scaling and
                    splitting.
                    <br />
                    Data visualization tools such as Seaborn and Matplotlib were
                    employed to explore correlations and insights within the
                    dataset.
                    <br />
                    Hyperparameter tuning was conducted using GridSearchCV to
                    optimize the model's performance. The final model was
                    applied to an unlabeled dataset to classify future
                    reservation cancellations, and the results were saved in a
                    CSV file for further analysis.
                  </p>
                </div>
                <div className="Tags mt-8 flex gap-2">
                  <LanguageTag children={"Pandas"} />
                  <LanguageTag children={"SVM"} />
                  <LanguageTag children={"Seaborn"} />
                  <LanguageTag children={"Matplotlib"} />
                  <LanguageTag children={"Scikit-learn"} />
                </div>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName=" col-span-1 max-lg:col-span-3 row-span-1 bg-zinc-800 rounded-2xl">
              <div className="main p-3">
                <div className="Title mb-5">
                  <h1 className=" font-manrope font-extrabold text-3xl text-zinc-100">
                    Streaming App (UWP)
                  </h1>
                </div>
                <div className="TextContainer">
                  <p className=" font-manrope font-medium leading-7 text-lg  text-zinc-200">
                    StreamingAPP is a Universal Windows Platform (UWP)
                    application designed for users to watch movies and series.
                    <br></br>
                    We implemented a quiz-like set of questions for users who
                    aren’t sure what to watch when it comes to movies or series,
                    which serves as a highlight feature of the app.
                  </p>
                </div>
                <div className="Tags flex flex-row md:flex-col gap-2 mt-8">
                  <div className=" flex flex-row gap-2">
                    <LanguageTag children={"SQLite"} />
                    <LanguageTag children={"REST API"} />
                  </div>
                  <div className=" flex flex-row gap-2">
                    <LanguageTag children={"MySQL/SQL"} />
                    <LanguageTag children={"C#"} />
                    <LanguageTag children={"XAML"} />
                  </div>
                </div>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName=" col-span-3 row-span-1 bg-[#201203] rounded-2xl">
              <div className="MainContent p-3">
                <div className="Title mb-5">
                  <h1 className=" font-manrope font-extrabold text-3xl text-zinc-100">
                    CooKingApp
                  </h1>
                </div>
                <div className=" grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                  <div className="TextContainer flex flex-col gap-5">
                    <p className=" font-manrope font-medium leading-7 text-lg  text-zinc-200">
                      CookingApp is a dynamic application designed to simplify
                      the often overwhelming task of deciding what to cook.
                      <br></br>
                      Users can effortlessly save their daily recipes, including
                      photos, ingredients, and preparation methods. With a
                      unique feature that allows users to randomly generate a
                      recipe, CookingApp transforms meal planning into a fun and
                      stress-free experience, making it easier to explore new
                      dishes and enjoy cooking every day.
                    </p>
                  </div>
                  <div className="ImageContainer flex flex-row max-lg:justify-center gap-3 p-4">
                    <img
                      src="/CookingApp1.png"
                      className=" h-96 object-contain rounded-md"
                      alt="CookingApp1"
                    />
                    <img
                      src="/CookingApp2.png"
                      className=" h-96 object-contain rounded-md"
                      alt="CookingApp2"
                    />
                  </div>
                </div>
                <div className="Tags flex w-96 mt-8 gap-2">
                  <LanguageTag children={"React Native"} />
                  <LanguageTag children={"Firebase"} />
                  <LanguageTag children={"TypeScript"} />
                </div>
              </div>
            </WobbleCard>
          </div>
        </>
      }
    />
  );
};

export default Projects;
