import { techs as allSkills } from "../helpers/techs";
import { useState } from "react";

import Typewriter from "typewriter-effect";

const Skills = () => {
  const [hola, setHola] = useState("");

  setTimeout(() => {
    setHola(
      "Actualmente soy estudiante universitario, mis pasatiempos favoritos son escuchar musica, ver videos de misterios, y Programar. Mi lenguaje favorito de programacion es TypeScript💙"
    );
  }, 0);

  // console.log(allSkills);
  return (
    <div className=" md:flex justify-center items-center container-90 ">
      <div className="md:w-1/2  ">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-2xl md:text-4xl ">
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

        <p className=" text-center font-semibold">{hola}</p>
      </div>

      <div className="md:w-1/2   m-2 ">
        <h2 className="text-center py-2 font-bold  justify-center items-center text-xl uppercase">
          Estas son algunas de mis skills
        </h2>
        <div className="container-50 ">
          <div className=" flexo  mx-auto  ">
            <h2 className=" font-bold">FrontEnd</h2>

            <div className=" flex ">
              {allSkills.frontend.map(({ ico, id, skill }) => {
                return (
                  <div key={id}>
                    <img
                      key={id}
                      src={ico}
                      alt={skill}
                      className=" w-[30px] pl-2 mx-auto"
                    />
                    {/* <p className=" text-sm pl-5">{skill}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto  pt-5">
            <h2 className=" font-bold">BackEnd</h2>

            <div className=" flex">
              {allSkills.backend.map(({ ico, id, skill }) => {
                return (
                  <div key={id}>
                    <img
                      key={id}
                      src={ico}
                      alt={skill}
                      className=" w-[40px] pl-2 mx-auto"
                    />
                    {/* <p className="text-sm pl-5">{skill}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto pt-5">
            <h2 className=" font-bold">Frameworks</h2>

            <div className=" flex">
              {allSkills.frameworks.map(({ ico, id, skill }) => {
                return (
                  <div key={id}>
                    <img
                      key={id}
                      src={ico}
                      alt={skill}
                      className=" w-[35px] pl-2 mx-auto"
                    />
                    {/* <p className="text-sm pl-5">{skill}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto pt-5">
            <h2 className=" font-bold">Bases de datos</h2>

            <div className=" flex">
              {allSkills.basesDeDatos.map(({ ico, id, skill }) => {
                return (
                  <div key={id}>
                    <img
                      key={id}
                      src={ico}
                      alt={skill}
                      className=" w-[40px] pl-2 mx-auto"
                    />
                    {/* <p className="text-sm pl-5">{skill}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flexo  mx-auto pt-5">
            <h2 className=" font-bold">Otros</h2>

            <div className=" flex">
              {allSkills.otros.map(({ ico, id, skill }) => {
                return (
                  <div key={id}>
                    <img
                      key={id}
                      src={ico}
                      alt={skill}
                      className=" w-[40px] pl-2 mx-auto"
                    />
                    {/* <p className="text-sm pl-5">{skill}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
