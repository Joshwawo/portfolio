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
        @media (min-width: 768px) {
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
      `}</style>
      <div className="pt-8 ">
        <div className="contenidoTest   dark:text-gray-300 ">
          <div className="bg-orange-30 xl:mb-40">
            <h2 className="text-center   from-pink-500 to-violet-500  bg-green-00  font-bold  justify-center  items-center text-2xl md:text-4xl ">
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
            <p className="text-justif  xl:pl-20 bg-green-20  pt-8 xl:pt-0   xl:mt-6 container-9   font-semibold g-orange-200">
              Padre de un gato, 2 cactus, mis pasatiempos favoritos son escuchar
              musica, podcast, todo lo paranomal y Programar. Mi lenguaje
              favorito de programacion es TypeScript💙
            </p>
          </div>

          <div className="md:w-[50%] xl:h-[25rem] pt-7">
            <span className="">
              Desarollo cosas geniales como -
              <span className=" px-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
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
                        .typeString("Desktop Apps")
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
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
