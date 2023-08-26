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
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {RiVuejsLine} from "react-icons/ri"

const SkillsGrid = () => {
  return (
    <div className="container mt-10 md:mt-0 mx-auto px-10 b-red-200 md:b-yellow-300 2xl:b-green-400   2xl:w-2/3 text-black font-bold ">
      {/* <div className=" "> */}
      <p className="dark:text-Dcardwhite text-Dcardblack  uppercase font-bold py-2 text-center ">
        Web Developer Skills
      </p>
      {/* How to use tag style in jsx? */}

      <style jsx={String(true)}>
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

      <div className="px-7 grid grid-cols-4  lg:grid-cols-6 xl:grid-cols-5 gap-4 ">
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010  dark:hover:bg-orange-600 hover:bg-orange-300  transition-colors tooltip  ">
          <SiHtml5 className="h-10 w-10 text-orange-500 dark:hover:text-black" />
          <span className="tooltiptext bg-orange-400 ">HTML5</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-blue-600   hover:bg-blue-300/40 transition-colors tooltip  ">
          <SiCss3 className="h-10 w-10 text-blue-500 " />
          <span className="tooltiptext uppercase bg-blue-400">css3</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-yellow-400  hover:bg-yellow-300 transition-colors tooltip">
          <SiJavascript className="h-10 w-10 text-yellow-400 bg-black " />
          <span className="tooltiptext  bg-yellow-400 uppercase">
            Javascript
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-blue-800   hover:bg-blue-300/40 transition-colors tooltip">
          <SiTypescript className="h-10 w-10 text-blue-600 bg-white" />
          <span className="tooltiptext uppercase bg-blue-400">Typescript</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-cyan-300   hover:bg-cyan-300/40 transition-colors tooltip">
          <SiReact className="h-10 w-10 text-white rounded-full bg-cyan-300" />
          <span className="tooltiptext uppercase bg-cyan-400">
            React (Framework Javascript)
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-green-300   hover:bg-green-300/40 transition-colors tooltip">
          <SiVuedotjs className="h-10 w-10 text-white rounded-full bg-green-500" />
          <span className="tooltiptext uppercase bg-green-400">
            Vue.js (Framework Javascript)
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-green-300   hover:bg-green-300/40 transition-colors tooltip">
          <SiNuxtdotjs className="h-10 w-10 text-white rounded-full bg-green-500" />
          <span className="tooltiptext uppercase bg-green-400">
            NUXT (Framework Vue.js)
          </span>
        </div>

        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-green-400   hover:bg-green-300/40 transition-colors tooltip ">
          <SiNodedotjs className="h-10 w-10 text-green-600 " />
          <span className="tooltiptext uppercase bg-green-400">Nodejs</span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-violet-400  hover:bg-violet-300/40 transition-colors tooltip ">
          <SiPhp className="h-10 w-10 text-violet-500 " />
          <span className="tooltiptext uppercase bg-violet-400 ">PHP</span>
        </div>

        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-emerald-300 hover:bg-emerald-300/40 transition-colors tooltip ">
          <SiTailwindcss className="h-10 w-10 text-emerald-500/70 " />
          <span className="tooltiptext uppercase bg-emerald-400">
            Tailwind (Framework css)
          </span>
        </div>
        <div
          title="Express"
          className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-black/40   hover:bg-black/40 hover:text-white transition-colors tooltip "
        >
          <SiExpress className="h-10 w-10 dark:text-white  " />
          <span className="tooltiptext uppercase bg-black ">
            Express.js (Framework node.js)
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-black/40 h hover:bg-black/40 hover:text-white transition-colors tooltip ">
          <TbBrandNextjs className="h-10 w-10 dark:text-white" />
          <span className="tooltiptext uppercase bg-black">
            Nextjs (Framework react)
          </span>
        </div>

        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-green-300   hover:bg-green-300/40  transition-colors tooltip ">
          <SiMongodb className="h-10 w-10 text-green-500 " />
          <span className="tooltiptext uppercase bg-green-400">
            MongoDB (base de datos NoSQL)
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-orange-100  hover:bg-orange-300/40  transition-colors tooltip ">
          <SiMysql className="h-10 w-10 text-orange-500 " />
          <span className="tooltiptext uppercase bg-orange-400">
            MySQL (base de datos SQL)
          </span>
        </div>
        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-red-300 hover:bg-red-300/40 transition-colors tooltip ">
          <SiMicrosoftsqlserver className="h-10 w-10 text-red-500 " />
          <span className="tooltiptext uppercase bg-red-400">
            SQL Server (base de datos SQL)
          </span>
        </div>

        <div className="flex flex-col place-items-center px-8 py-5 rounded-md  bg-gray-0 dark:bg-[#101010 dark:hover:bg-red-100  hover:bg-orange-300/50  transition-colors tooltip">
          <SiGit className="h-10 w-10 text-red-500 " />
          <span className="tooltiptext uppercase bg-red-400">
            Git (Control de versiones)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
