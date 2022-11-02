import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiGit,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsTest = () => {
  return (
    <div className="container mx-auto px-10 b-red-200 md:b-yellow-300 2xl:b-green-400   2xl:w-2/3 text-black font-black">
      {/* <div className=" "> */}
      <p className="text-gray-500 uppercase font-bold pt-2 text-center ">
        FrontEnd Skills
      </p>
      {/* How to use tag style in jsx? */}

      <style jsx>
        {`
          .tooltip {
            position: relative;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            
            
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            margin-top: 5px;

            /* Position the tooltip */
            position: absolute;
            top: 70%;
            z-index: 1;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
        `}
      </style>

      <div className="px-7 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-8 ">
        <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-orange-300/50 transition-colors tooltip  ">
          <SiHtml5 className="h-10 w-10 text-orange-500" />
          <span className="tooltiptext bg-orange-400 ">HTML5</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-blue-300/40 transition-colors tooltip  ">
          <SiCss3 className="h-10 w-10 text-blue-500 " />
          <span className="tooltiptext uppercase bg-blue-400">css3</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-yellow-300/40 transition-colors tooltip">
          <SiJavascript className="h-10 w-10 text-yellow-400 bg-black " />
          <span className="tooltiptext  bg-yellow-400 uppercase">Javascript</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-blue-300/40 transition-colors tooltip">
          <SiTypescript className="h-10 w-10 text-blue-600 bg-white" />
          <span className="tooltiptext uppercase bg-blue-400">Typescript</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-cyan-300/40 transition-colors tooltip">
          <SiReact className="h-10 w-10 text-white rounded-full bg-cyan-300" />
          <span className="tooltiptext uppercase bg-cyan-400">React</span>
        </div>
      </div>

      {/* <div className="grid  grid-cols-2 md:grid-cols-5   2xl:grid-cols-5 bg-red-400 sm:bg-green-400 md:bg-yellow-300 xl:bg-blue-400 place-items-center ">
          <div className="bg-gray-100 w-[10rem]  h-[5rem md:w-[15rem xl:w-[80%] mt-2 md:mt-0 pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors tooltip  ">
            <SiHtml5 className="h-10 w-10 text-orange-500" />
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-gray-300/40 transition-colors tooltip">
            <SiCss3 className="h-10 w-10 text-blue-500 " />
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-gray-300/40 transition-colors tooltip">
            <SiJavascript className="h-10 w-10 text-yellow-400 bg-black " />
          </div>
         <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-gray-300/40 transition-colors tooltip">
             <SiReact className="h-10 w-10 text-white rounded-full bg-cyan-300" />
         </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-gray-300/40 transition-colors tooltip">
            <SiTypescript className="h-10 w-10 text-blue-600 bg-white" />
          </div>
        </div> */}
      {/* </div> */}
      <div className="">
        <p className="text-gray-500 font-bold pt-2 text-center uppercase">
          {/* BackEnd Skills */}
        </p>
        <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 ">
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-green-300/40 transition-colors tooltip ">
            <SiNodedotjs className="h-10 w-10 text-green-600 " />
            <span className="tooltiptext uppercase bg-green-400">Nodejs</span>
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-violet-300/40 transition-colors tooltip ">
            <SiPhp className="h-10 w-10 text-violet-500 " />
            <span className="tooltiptext uppercase bg-violet-400 ">PHP</span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2 text-center uppercase">
          {/* Frameworks */}
        </p>
        <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 ">
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-emerald-300/40 transition-colors tooltip ">
            <SiTailwindcss className="h-10 w-10 text-emerald-500/70 " />
            <span className="tooltiptext uppercase bg-emerald-400">Tailwind (Framework css)</span>  
          </div>
          <div
            title="Express"
            className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-black/40 hover:text-white transition-colors tooltip "
          >
            <SiExpress className="h-10 w-10  " />
            <span className="tooltiptext uppercase bg-black">Express.js (Framework node.js)</span>
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-black/40 hover:text-white transition-colors tooltip ">
            <TbBrandNextjs className="h-10 w-10 " />
            <span className="tooltiptext uppercase bg-black">Nextjs (Framework react)</span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2 text-center uppercase">
          {/* DataBases */}
        </p>
        <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 ">
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-green-300/40 transition-colors tooltip ">
            <SiMongodb className="h-10 w-10 text-green-500 " />
            <span className="tooltiptext uppercase bg-green-400">MongoDB (base de datos NoSQL)</span>
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-orange-300/40 transition-colors tooltip ">
            <SiMysql className="h-10 w-10 text-orange-500 " />
            <span className="tooltiptext uppercase bg-orange-400">MySQL (base de datos SQL)</span>
          </div>
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:from-blue-600 hover:to-red-400 hover:bg-red-300/40 transition-colors tooltip ">
            <SiMicrosoftsqlserver className="h-10 w-10 text-red-500 " />
            <span className="tooltiptext uppercase bg-red-400">SQL Server (base de datos SQL)</span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2 text-center uppercase">
          {/* Others */}
        </p>
        <div className="px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 ">
          <div className="flex flex-col place-items-center px-8 py-6 rounded-md  bg-gray-200 gap-6 hover:bg-red-300/40  transition-colors tooltip ">
            <SiGit className="h-10 w-10 text-red-500 " />
            <span className="tooltiptext uppercase bg-red-400">Git (Control de versiones)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTest;
