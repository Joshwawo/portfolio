import { Link } from "react-router-dom";
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { DarkModeSwitch } from "../helpers/SvgSwitch"
import {AiFillGithub,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai'

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSite, setDarkSite] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSite(checked);
  };

  return (
    <div className="">
      <div className="w-full bg-[#FFFFFFDE]  dark:text-white dark:bg-[#242424] rounded-lg  grid md:grid-cols-12 gap-4 items-center justify-center md:py-5">
        <nav className="md:col-span-8 my-2  flex items-center gap-4 justify-center text-xl">
          <Link to="/"
            
            className="py-2 px-2 rounded-lg hover:bg-[#131010] hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
          >
            Inicio
          </Link>
          <a
            href="#"
            className="py-2 px-2 rounded-lg hover:bg-[#131010] hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
          >
            Blog <span className="text-sm text-orange-300 ">soon</span>
          </a>
          {/* 
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >p
            Servicios
          </a>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Blog
          </a> */}
          <a
            href="#contacto"
            className="py-2 px-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
          >
            Contacto
          </a>
        </nav>
        <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
          <DarkModeSwitch
            style={{ marginBottom: "rem" }}
            checked={darkSite}
            onChange={toggleDarkMode}
            size={30}
            sunColor="black"
          />
          <a target={"_blank"} href="https://www.linkedin.com/in/jorgemorales98/">
          <AiFillLinkedin size={25} className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black"/>
          </a>
          <a href="#">
            <AiFillYoutube size={25} className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full"/>
          </a>
          <a target={"_blank"} href="https://github.com/Joshwawo">

            <AiFillGithub size={25} className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full" />
          
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
