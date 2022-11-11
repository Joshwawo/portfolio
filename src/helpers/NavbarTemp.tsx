import { useState, useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import { DarkModeSwitch } from "./SvgSwitch";
import useDarkMode from "../hooks/useDarkMode";

const NavbarTemp = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSite, setDarkSite] = useState(
    colorTheme === "light" ? true : false
  );
  //TODO: aqui deje un any
  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSite(checked);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center mt-2">
        <DarkModeSwitch
          style={{ marginBottom: "rem" }}
          checked={darkSite}
          onChange={toggleDarkMode}
          size={20}
          sunColor="black"
        />
      </div>
      <Outlet/>
    </div>
  );
};

export default NavbarTemp;
