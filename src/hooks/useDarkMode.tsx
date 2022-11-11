import { useState, useEffect } from "react";

const useDarkMode: any = () => {

 let windowsDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  // const [theme, setTheme] = useState(localStorage.theme);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || windowsDark ? "dark" : "light"
    );
  const colorTheme = theme === "dark" ? "light" : "dark";

  // console.log(theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
