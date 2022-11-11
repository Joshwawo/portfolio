import Cartita from "../../components/portfolio/Cartita";
import FormularioContacto from "../../components/forms/FormularioContacto";
import Skills from "../../components/portfolio/Skills";
import SkillsGrid from "../../components/portfolio/SkillsGrid";
import Navbar from "../../components/portfolio/Navbar";

const Homepage = () => {
  return (
    <div className="">
      <Navbar />

      <Skills />
      {/* <Projects /> */}
      {/* <SkillsTest/> */}
      <SkillsGrid />
      {/* <CardTest/> */}
      <Cartita />
      <FormularioContacto />
      {/* <Contacto /> */}
    </div>
  );
};

export default Homepage;
