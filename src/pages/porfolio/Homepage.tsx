import Cartita from "../../components/portfolio/Cartita";
import FormularioContacto from "../../components/forms/FormularioContacto";
import Skills from "../../components/portfolio/Skills";
import SkillsGrid from "../../components/portfolio/SkillsGrid";
import Navbar from "../../components/portfolio/Navbar";
import Footer from "../../components/portfolio/Footer";

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
      {/* <FormularioContacto /> */}
      {/* <Contacto /> */}
      <Footer/>
    </div>
  );
};

export default Homepage;
