import { DarkModeSwitch } from "../../helpers/SvgSwitch";
import useDarkMode from "../../hooks/useDarkMode";
import { useAuth } from "../../context/AuthProvider";
import { useState, useEffect } from "react";
import { Link, useNavigate, Location, Outlet } from "react-router-dom";

export default function Header() {
  const [showLogout, setShowLogout] = useState(false);

  const { auth: usuario } = useAuth();
  //   console.log(usuario);

  const [colorTheme, setTheme] = useDarkMode();
  const [darkSite, setDarkSite] = useState(
    colorTheme === "light" ? true : false
  );

  const navigate = useNavigate();

  //TODO: aqui deje un any
  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSite(checked);
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");

    useEffect(() => {
      navigate("/");
    }, []);
  };

  return (
    <>
      <header className="px-6 py-4 flex shadow-md dark:bg-[#363636] justify-between items-center">
        <div className="flex">
          <div className='relative'>
            <button onClick={() => setShowLogout(!showLogout)} className="dark:bg-pink-500 bg-Dcardblack rounded-full aspect-square w-8 flex justify-center items-center text-xl text-white font-bold cursor-pointer hover:scale-105">
              {usuario?.name?.slice(0, 1)}
            </button>
            <Link to={"/auth/login"} onClick={handleSignOut} className={`w-24 dark:bg-Dcardblack px-4 py-1 rounded text-Dcardblack bg-gray-400 dark:text-Dcardwhite hover:bg-red-500 absolute transition-all ${showLogout ? "opacity-100 -bottom-[2.5rem]" : "opacity-0 -bottom-5 pointer-events-none"}`}>
              Sign out
            </Link>
          </div>
          <nav>
            <ul className='flex items-center h-full gap-4 ml-4'>
              <li>
                <Link to="/usuarios/images" className="text-sm text-Dcardblack dark:text-white ml-2 dark:hover:!text-gray-200" >
                  Dall-e Images
                </Link>
              </li>
              <li>
                <Link to="/usuarios/se" className="text-sm text-Dcardblack dark:text-white ml-2 dark:hover:!text-gray-200">
                  Search images
                </Link>
              </li>
              <li>
                <Link to="/usuarios/uploadse" className="text-sm text-Dcardblack dark:text-white ml-2 dark:hover:!text-gray-200">
                  Upload images <span className="text-xs dark:text-white bg-Dcardwhite rounded-md px-1 dark:bg-pink-500/70 ">Beta</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <DarkModeSwitch
            style={{ marginBottom: "rem" }}
            checked={darkSite}
            onChange={toggleDarkMode}
            size={20}
            sunColor="black"
          />
        </div>
      </header>



    </>
  );
}
