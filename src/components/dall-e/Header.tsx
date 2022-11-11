import { DarkModeSwitch } from "../../helpers/SvgSwitch";
import useDarkMode from "../../hooks/useDarkMode";
import { useAuth } from "../../context/AuthProvider";
import { useState, useEffect } from "react";
import { Link, useNavigate, Location,Outlet } from "react-router-dom";

export default function Header() {
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
          <div>
            <span className="dark:bg-pink-500 bg-Dcardblack rounded-full aspect-square w-8 flex justify-center items-center text-xl text-white font-bold cursor-pointer hover:scale-105">
              {usuario?.name?.slice(0, 1)}
            </span>
          </div>
          <nav className="flex items-center">
            <Link to="/usuarios/images">
              <span className="text-sm  text-Dcardblack dark:text-white ml-2">
                Dalle Images
              </span>
            </Link>
            <Link to="/usuarios/se">
              <span className="text-sm text-Dcardblack dark:text-white ml-2">
                Search Engine Images
              </span>
            </Link>
            <Link to="/usuarios/uploadse">
              <span className="text-sm text-Dcardblack dark:text-white ml-2">
                Upload Search Engine Images <span className="text-xs dark:text-white bg-Dcardwhite rounded-md px-1 dark:bg-pink-500/70 ">Beta</span>
              </span>
            </Link>
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
          <Link
            to={"/auth/login"}
            onClick={handleSignOut}
            className="hover:text-red-600 text-Dcardblack dark:text-Dcardwhite dark:hover:text-red-500 "
          >
            Sign out
          </Link>
        </div>
      </header>

      

    </>
  );
}
