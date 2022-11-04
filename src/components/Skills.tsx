import { techs as allSkills } from "../helpers/techs";
import { useState } from "react";
import Typewriter from "typewriter-effect";
// import { DarkModeSwitch} from 'react-toggle-dark-mode'
import { DarkModeSwitch } from "../helpers/SvgSwitch";
import useDarkMode from "../hooks/useDarkMode";

const Skills = () => {
  // const [hola, setHola] = useState("");

  // setTimeout(() => {
  //   setHola(
  //     "Padre de un gato, 2 cactus, mis pasatiempos favoritos son escuchar musica, podcast, todo lo paranomal y Programar. Mi lenguaje favorito de programacion es TypeScript💙"
  //   );
  // }, 0);

  // console.log(allSkills);
  return (
    <>
      <style jsx={String(true)}>{`
        /*
      align-items: center;
      */
        @media (min-width: 1280px) {
          .contenidoTest {
            max-width: 1300px;
            display: flex;
            -webkit-box-allign: center;
            -webkit-box-pack: center;
            justify-content: space-between;
            align-items: center;
            margin: auto;
            gap: 1rem;
          }
        }

        
       
        .subtituloSkills{
          color: rgba(235, 235, 235, 0.7);
        }
      `}</style>
      <div className="pt-8 ">
        <div className="contenidoTest   dark:text-gray-30 ">
          <div className="bg-orange-30 text-slate-600 dark:text-slate-400 xl:mb-40">
            <h2 className="text-center md:pt-20 dark:text-[#E3E3E3] text-titleNegro from-pink-500 to-violet-500  bg-green-00  font-bold  justify-center  items-center text-2xl md:text-4xl ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hola, Soy Jorge  Morales ")
                    .callFunction(() => {})
                    .pauseFor(1000)
                    .typeString("Web Developer 😀")
                    .callFunction(() => {})
                    .start();
                }}
              />
            </h2>
            <p className=" text-center text-[#767676] px-1 sm:px-5  xl:pl-10 bg-green-20  pt-8 xl:pt-0   xl:mt-6 container-9   font-semibold g-orange-200">
              Padre de un gato, 2 cactus, mis pasatiempos favoritos son escuchar
              musica, podcast, todo lo paranomal y Programar. Mi lenguaje
              favorito de programacion es TypeScript💙
            </p>
          </div>

          <div className="md:w-[50%] xl:h-[20rem] pt-7 md:pt-24  text-center  mx-auto ">
            <span className=" md:text-xl text-lg text-titleNegro  dark:text-Tcardwhite block font-medium">
              Creo cosas geniales como 
              
            </span>
            
            <span className="  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 dark:before:bg-pink-500 relative inline-block">
                <span className="relative text-white">
                  <Typewriter
                    onInit={(typeWriter) => {
                      typeWriter
                        .typeString("Rest API's")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web Apps")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Landing Pages")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Contenido Educativos")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                      loop: true,
                    }}
                  />
                </span>
              </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
