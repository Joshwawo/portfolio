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
    <div className="container mx-auto px-10 b-red-200 md:b-yellow-300 2xl:b-green-400   2xl:w-2/3">
      <div className=" ">
        <p className="text-gray-500 font-bold pt-2">FrontEnd Skills</p>

        <div className="grid  grid-cols-2 md:grid-cols-5   2xl:grid-cols-5">
          <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
            <SiHtml5 className="h-10 w-10 text-orange-500 " />
          </div>
          <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors">
            <SiCss3 className="h-10 w-10 text-blue-500 " />
          </div>
          <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors">
            <SiJavascript className="h-10 w-10 text-yellow-400 bg-black " />
          </div>
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors">
             <SiReact className="h-10 w-10 text-white rounded-full bg-cyan-300" />
         </div>
          <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors">
            <SiTypescript className="h-10 w-10 text-blue-600 bg-white" />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2">BackEnd Skills</p>
       <div className="grid grid-cols-2 md:grid-cols-5  2xl:grid-cols-5">
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiNodedotjs className="h-10 w-10 text-green-600 " />
         </div>
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiPhp className="h-10 w-10 text-violet-500 " />
         </div>
       </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2">Frameworks</p>
       <div className="grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-5">
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiTailwindcss className="h-10 w-10 text-emerald-500/70 " />
         </div>
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiExpress className="h-10 w-10  " />
         </div>
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <TbBrandNextjs className="h-10 w-10 text-black" />
         </div>
       </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2">DataBase</p>
       <div className="grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-5">
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiMongodb className="h-10 w-10 text-green-500 " />
         </div>
         <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
             <SiMysql className="h-10 w-10 text-orange-500 " />
         </div>
        <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
          <SiMicrosoftsqlserver className="h-10 w-10 text-red-500 " />
        </div>
       </div>
      </div>
      <div className="">
        <p className="text-gray-500 font-bold pt-2">Others</p>
        <div className="gri grid-cols-2dmd: grid-cols- 2 2xl:grid-cols-5">
            <div className="bg-gray-100 w-[10rem] mt-5 h-[5rem] pt-5 px-2 rounded-xl pl-14 hover:bg-gray-200 transition-colors ">
                <SiGit className="h-10 w-10 text-red-500 " />
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default SkillsTest;
