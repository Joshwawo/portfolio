import {
  AiFillGithub,
  AiOutlineFolder,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {GrShare} from 'react-icons/gr'
import { usePost } from "../context/BlogContext";
import Comparador from "../helpers/Comparador";
import { InterfacesProyectos } from "../interfaces/proyectosInterface";

const Cartita = () => {
  const { posts } = usePost();
//   console.log(posts);
  //container mx-auto grid md:grid-cols-2  xl:grid-cols-3
  return (
   <>
    <p className=" text-center text-2xl mt-5 font-semibold">Algunos de mis proyectos</p>
     <div className="  bg-red-30 container md:pl-8 grid md:grid-cols-2 xl:grid-cols-3 mx-auto">
       {posts.map((item: InterfacesProyectos) => (
         <section key={item?._id} className="  ">
           <div className=" bg-gray-100 hover:bg-gray-200 mt-3  h-[12rem] py-4 md:h-[15rem] md:w-[30rem] px-2 rounded-xl">
             <div className="flex  justify-between px-24 py md:px-8 md:py-6 rounded-md  gap-6">
               <AiOutlineFolder className=" h-8  w-10" />
               <div className="flex items-center">
                 <a target={"_blank"} href={item.github}>
                     <AiFillGithub className="h-7 w-10" />
                 </a>
                 <a target={"_blank"} href={item.proyectUrl}>
                     <GrShare className="h-6 w-6" />
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
           </div>
         </section>
       ))}
     </div>
   </>
  );
};

export default Cartita;
