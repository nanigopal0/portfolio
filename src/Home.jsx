import Education from "./Education";
import Feedback from "./Feedback";
import Me from "./Me";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <div className="w-full p-5">
      <section id="me">
        <Me />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <section id="experience">
            <Experience/>
        </section> 
        <section id="achievments">
            <Achievments/>
        </section> */}
      <section id="feedback">
        <Feedback />
      </section>
    </div>
  );
}

export default Home;
