import CardTest from "../components/CardTest";
import Contacto from "../components/Contacto";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SkillsGrid from "../components/SkillsGrid";
import SkillsTest from "../components/SkillsTest";

const Homepage = () => {
  return (
    <div className="">
      <Skills />
      {/* <Projects /> */}
      {/* <SkillsTest/> */}
      <SkillsGrid/>
      <CardTest/>
      {/* <Contacto /> */}
    </div>
  );
};

export default Homepage;
