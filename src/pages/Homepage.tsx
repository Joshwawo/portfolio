import CardTest from "../components/CardTest";
import Cartita from "../components/Cartita";
import Contacto from "../components/Contacto";
import FormularioContacto from "../components/FormularioContacto";
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
      {/* <CardTest/> */}
      <Cartita/>
      <FormularioContacto/>
      {/* <Contacto /> */}
    </div>
  );
};

export default Homepage;
