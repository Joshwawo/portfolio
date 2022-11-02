import {
  AiFillGithub,
  AiOutlineFolder,
  AiOutlineShareAlt,
  AiOutlineFork,
} from "react-icons/ai";
import { usePost } from "../context/BlogContext";
import Comparador from "../helpers/Comparador";
import { InterfacesProyectos } from "../interfaces/proyectosInterface";

const Cartita = () => {
  const { posts } = usePost();
  //   console.log(posts);
  //container mx-auto grid md:grid-cols-2  xl:grid-cols-3
  return (
    <>
      <style jsx={String(true)}>
        {`
          .tooltipCartita {
            position: relative;
          }

          .tooltipCartita .tooltiptext {
            visibility: hidden;

            text-align: center;
            border-radius: 6px;
            

            /* Position the tooltip */
            position: absolute;
            top: 90%;
            z-index: 1;
          }

          .tooltipCartita:hover .tooltiptext {
            visibility: visible;
          }
        `}
      </style>
      <p className=" text-center text-xl my-5 pt-10 font-semibold text-gray-500 ">
        Algunos de mis proyectos
      </p>
      <div className="container mx-auto px-7 grid  lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {posts.map((item: InterfacesProyectos) => (
          <section
            key={item?._id}
            className="bg-gray-200 dark:bg-[#101010] mb-10 dark:text-gray-400  flex flex-col  justify-between px-8 py-6 rounded-md hover:bg-gray-400/40 gap-6"
          >
            <div className="  flex justify-between ">
              <a target={"_blank"} href={item.proyectUrl} className=" tooltipCartita">
                <AiOutlineShareAlt className="h-6 w-6 dark:hover:text-white" />
                <span className="tooltiptext bg-slate-400/  text-base font-semibold">Ir al proyecto</span>
              </a>
              <div className="flex justify-end">
                <a target={"_blank"} href={item.github}>
                  <AiFillGithub className="h-7 w-10 dark:hover:text-white" />
                </a>
                <a>
                  <AiOutlineFork className=" h-8  w-10 dark:hover:text-white" />
                </a>
              </div>
            </div>
            <div className="contenido  pl-9 mt-3 md:mt-0">
              <p className="font-bold text-lg">{item?.title}</p>
              <p>{item?.descripcion}</p>
              <div className="">
                <Comparador key={item?._id}>{item.tech}</Comparador>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Cartita;
