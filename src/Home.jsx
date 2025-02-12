import Achievments from "./Achievments";
import Education from "./Education";
import Experience from "./Experience";
import Me from "./Me";
import Projects from "./Projects";
import Skills from "./Skills";

function Home(){
    return(
        <div style={{paddingTop:'4rem'}}>
        <section id="me">
            <Me/>
        </section>
        <section id="education">
            <Education/>
        </section>
        <section id="skills">
            <Skills/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        {/* <section id="experience">
            <Experience/>
        </section> 
        <section id="achievments">
            <Achievments/>
        </section> */}
        </div>
    )
}

export default Home;