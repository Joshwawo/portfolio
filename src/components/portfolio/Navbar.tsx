import { Link } from "react-router-dom";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { DarkModeSwitch } from "../../helpers/SvgSwitch";
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode(
    localStorage.theme === "dark" ? "light" : "dark"
  );
  const [darkSite, setDarkSite] = useState(
    colorTheme === "light" ? true : false
  );

  //TODO: aqui deje un any
  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSite(checked);
  };

  return (
    //   <div className="">
    //   <div className="w-full bg-[#FFFFFFDE] uppercase  dark:text-white dark:bg-[#242424] rounded-lg  grid md:grid-cols-12 gap-4 items-center justify-center md:py-5">
    //     <nav className="md:col-span-8 my-2  flex items-center gap-4 justify-center text-xl">
    //       <div className="group relative h-7 w-14  overflow-hidden  text-lg text-center ">
    //         <Link
    //           to="/"
    //           className="absolute inset-0 w-3 bg-amber-400 dark:bg-pink-500 dark:hover:rounded transition-all duration-[250ms] ease-out group-hover:w-full"
    //         >
    //          <span className="relative text-black dark:text-white group-hover:text-white">
    //             Home
    //           </span>
    //         </Link>
    //       </div>
    //       <a
    //         href="#"
    //         className="py-2 px-2 rounded-lg hover:bg-[#131010] hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
    //       >
    //         Blog <span className="text-sm text-orange-300 ">soon</span>
    //       </a>
    //       <div>
    //         <p className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg text-center shadow">
    //           <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    //           <span className="relative text-black group-hover:text-white">
    //             Hover me!
    //           </span>
    //         </p>
    //       </div>
    //       {/*
    //       <a
    //         href="#"
    //         className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
    //       >p
    //         Servicios
    //       </a>
    //       <a
    //         href="#"
    //         className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
    //       >
    //         Blog
    //       </a> */}

    //       <Link
    //         to={"/usuarios/images"}
    //         className="py-2 px-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
    //       >
    //         DALLE 2{" "}
    //         <span className="text-sm lowercase text-orange-500 dark:text-pink-500 rounded-sm ">
    //           new
    //         </span>
    //       </Link>
    //     </nav>
    //     <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
    //       <DarkModeSwitch
    //         style={{ marginBottom: "rem" }}
    //         checked={darkSite}
    //         onChange={toggleDarkMode}
    //         size={30}
    //         sunColor="black"
    //       />
    //       <a
    //         target={"_blank"}
    //         href="https://www.linkedin.com/in/jorgemorales98/"
    //       >
    //         <AiFillLinkedin
    //           size={25}
    //           className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black"
    //         />
    //       </a>
    //       <a href="#">
    //         <AiFillYoutube
    //           size={25}
    //           className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full"
    //         />
    //       </a>
    //       <a target={"_blank"} href="https://github.com/Joshwawo">
    //         <AiFillGithub
    //           size={25}
    //           className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="">
      <div className="w-full bg-[#FFFFFFDE] uppercase  dark:text-white dark:bg-[#242424] rounded-lg  grid md:grid-cols-12 gap-4 items-center justify-center md:py-5">
        <nav className="md:col-span-8 my-2  flex items-center gap-2 justify-center text-xl">
          <div className="group relative h-7 w-24  overflow-hidden  text-lg text-center ">
            <Link
              to="/"
              className="absolute inset-0 w-2  hover:bg-pink-500 dark:hover:rounded transition-all duration-[250ms] ease-out group-hover:w-full"
            >
              <span className="relative text-black dark:text-Tcardwhite group-hover:text-black">
                Home
              </span>
            </Link>
          </div>
          <div className="group relative h-7 w-24  overflow-hidden  text-lg text-center ">
            <a target={"_blank"} href="https://mepersonal-blog.vercel.app/blog" className="absolute inset-0 w-2  hover:bg-pink-500 hover:rounded-sm dark:hover:rounded transition-all duration-[250ms] ease-out group-hover:w-full">
              <span className="relative text-black dark:text-Tcardwhite group-hover:text-black">
                Blog{" "}
              </span>
            </a>
          </div>
          {/* <div className="group relative h-7 w-24  overflow-hidden  text-lg text-center ">
            <Link
              to="/usuarios/images"
              className="absolute inset-0 w-2  hover:bg-pink-500 dark:hover:rounded transition-all duration-[250ms] ease-out group-hover:w-full"
            >
              <span className="relative text-black dark:text-Tcardwhite group-hover:text-black">
                Dalle2
              </span>
            </Link>
          </div> */}

          {/* <Link
            to={"/usuarios/images"}
            className="py-2 px-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition-colors"
          >
            DALLE 2{" "}
            <span className="text-sm lowercase text-orange-500 dark:text-pink-500 rounded-sm ">
              new
            </span>
          </Link> */}
        </nav>
        <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
          <DarkModeSwitch
            style={{ marginBottom: "rem" }}
            checked={darkSite}
            onChange={toggleDarkMode}
            size={30}
            sunColor="black"
          />
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/jorgemorales98/"
          >
            <AiFillLinkedin
              size={25}
              className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black"
            />
          </a>
          <a href="#">
            <AiFillYoutube
              size={25}
              className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full"
            />
          </a>
          <a target={"_blank"} href="https://github.com/Joshwawo">
            <AiFillGithub
              size={25}
              className="hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
