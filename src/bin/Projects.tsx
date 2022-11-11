import Comparador from "../helpers/Comparador";
import { useState, useEffect } from "react";
import axios from "axios";
import { InterfacesProyectos } from "../interfaces/proyectosInterface";
import { FiGithub } from "react-icons/fi";
import { ImRedo2 } from "react-icons/im";
import {usePost} from '../context/BlogContext'

const Projects = () => {
  //   console.log(import.meta.env.VITE_IP);
  // const [proyectos, setProyectos] = useState<InterfacesProyectos[]>([]);

  const {posts} = usePost()


  return (
    <div>
      <p className="text-center  text-xl my-5">Estos son algunos de mis proyectos</p>

      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4  gap-5  mx-4 ruth">
        {posts.map((projec: InterfacesProyectos) => (
          <article key={projec._id} className="flex flex-wrap justify-center  ">
            <div className="max-w-md   rounded overflow-hidden shadow-lg my-2  ">
              {projec.image && (
                <img
                  loading="lazy"
                  className="w-full bg-black/80"
                  src={projec.image.url}
                  alt={projec.title}
                />
              )}
              <div className="px-6 py-4">
                <p className="font-bold uppercase">{projec.title}</p>
                <p className=" text-gray-500/80">{projec.descripcion}</p>
              </div>
              <div className="toProject">
                <div className=" flex justify-center gap-2">
                  <p className=" text-sm font-semibold">Source Code:</p>
                  <a target="_blank" href={`${projec.github}`}>
                    <FiGithub />
                  </a>
                </div>
                <div className="flex justify-center gap-2">
                  <p className=" text-sm font-semibold gap-2">Play Demo:</p>

                  <a target={"_blank"} href={projec.proyectUrl}>
                    <ImRedo2 />
                  </a>
                </div>
              </div>
              <div className="techs">
                <div className="techs">
                  <Comparador key={projec._id}>{projec.tech}</Comparador>
                </div>
              </div>
              <div className="px-4 py-4">
                {/* <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold">Price:</span>
                  V-Bucks
                </span> */}
                {/* <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold">Rarity:</span>{" "}
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold">Giftable:</span>
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold">Refundable:</span>
                </span> */}
                
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
