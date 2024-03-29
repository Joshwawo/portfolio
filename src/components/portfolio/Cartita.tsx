import {
  AiFillGithub,
  AiOutlineFolder,
  AiOutlineShareAlt,
  AiOutlineFork,
  AiFillPlayCircle,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { usePost } from "../../context/BlogContext";
import Comparador from "../../helpers/Comparador";
import { InterfacesProyectos } from "../../interfaces/proyectosInterface";

const Cartita = () => {
  const { posts,loading} = usePost();
  // console.log(posts);
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

          .textoTitulo {
          }
          .textoDescripcion {
            color: rgba(160, 160, 145, 0.77);
          }
        `}
      </style>
      <p className=" text-center text-xl my-5 pt-10 font-semibold text-Dcardblack dark:text-Dcardwhite ">
        Algunos de mis proyectos
      </p>
      {
        loading ? <p className="text-center text-xl my-5 pt-10 font-semibold text-Dcardblack dark:text-Dcardwhite ">Cargando...</p>
         :
         <section className="container mx-auto px-7 grid  lg:grid-cols-2 xl:grid-cols-3 gap-4 my-2">
        {posts.map((item: InterfacesProyectos) => (
          <article
            key={item?._id}
            className="bg-[#F9F9F9] dark:bg-[#2F2F2F]  dark:text-gray-400  flex flex-col-reverse  justify-between px-2 md:px-8 py-6 rounded-md gap-1"
          >
            <div className="  flex justify-between ">
              <a
                target={"_blank"}
                href={item.proyectUrl}
                className=" tooltipCartita"
              >
                <AiFillPlayCircle className="h-6 w-6 dark:hover:text-white" />
                <span className="tooltiptext bg-gray-200 dark:bg-black px-2  dark:text-green-300  text-base font-semibold">
                  {item.proyectUrl ? "Demo" : "Demo no disponible 😔"}
                </span>
              </a>
              <div className="flex justify-end">
                <a
                  target={"_blank"}
                  href={item.github}
                  className=" tooltipCartita"
                >
                  <AiFillGithub className="h-7 w-10 dark:hover:text-white" />
                  <span className="tooltiptext dark:bg-black px-4 py-2 dark:text-green-300  text-base font-semibold">
                    {item.github ? 'Repositorio':'Repositorio no disponible 😔'}
                  </span>
                </a>
                {/* <a className="tooltipCartita">
                  <AiOutlineFork className=" h-8  w-10 dark:hover:text-white " />
                  <span className="tooltiptext dark:bg-black px-4 py-2 dark:text-green-300  text-base font-semibold">Fork </span>
                  
                </a> */}
              </div>
            </div>
            <div className="contenido  pl-9 mt-3 md:mt-0">
              <p className="font-bold text-lg dark:Tcardwhite">{item?.title}</p>
              <p className=" text-Dcardblack dark:text-Dcardwhite">
                {item?.descripcion}
              </p>
              <div className="">
                <Comparador key={item?._id}>{item.tech}</Comparador>
              </div>
            </div>
          </article>
        ))}
      </section> 
      }
    </>
  );
};

export default Cartita;
