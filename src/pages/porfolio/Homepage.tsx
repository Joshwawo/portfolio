import CardTest from "../../bin/CardTest";
import Cartita from "../../components/portfolio/Cartita";
import Contacto from "../../components/portfolio/Contacto";
import FormularioContacto from "../../components/forms/FormularioContacto";
import Projects from "../../bin/Projects";
import Skills from "../../components/portfolio/Skills";
import SkillsGrid from "../../components/portfolio/SkillsGrid";
import SkillsTest from "../../bin/SkillsTest";
import Navbar from '../../components/portfolio/Navbar'

const Homepage = () => {
  return (
    <div className="">
      <Navbar/>

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
