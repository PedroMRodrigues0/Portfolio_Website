import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import { Home } from "./sections/Home/Home";
import Languages from "./sections/Languages/Languages";
import Projects from "./sections/Projects/Projects";
function App() {
  return (
    <main className="overflow-hidden">
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Languages />
    </main>
  );
}

export default App;
