import CardTest from "../components/CardTest";
import Contacto from "../components/Contacto";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SkillsTest from "../components/SkillsTest";

const Homepage = () => {
  return (
    <div className="">
      <Skills />
      {/* <Projects /> */}
      <SkillsTest/>
      <CardTest/>
      <Contacto />
    </div>
  );
};

export default Homepage;
