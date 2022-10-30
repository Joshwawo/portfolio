import { InterfacesProyectos } from "../interfaces/proyectosInterface";

type Props = {
  children: InterfacesProyectos["tech"];
};

type TechsType = {
  [key: string]: string;
};

const Comparador = ({ children }: Props) => {
  const design: TechsType = {
    html: "bg-orange-100",
    css: "bg-blue-100",
    javascript: "bg-yellow-100",
    typescript: "bg-blue-200/100",
    react: "bg-teal-100",
    node: "bg-lime-200",
    php: "bg-purple-100",
    tailwind: "bg-emerald-100",
    express: "bg-green-200/80",
    mongodb: "bg-slate-100",
    mysql: "bg-orange-100",
    git: "bg-red-100",
    github: "bg-gray-100",
    jwt: "bg-black/50",
    jsonserver:"jsondata-bg",
    boostrap:"bg-violet-100",
    localstorage:"bg-black/10",

  };

  const textDesign: TechsType = {
    html: "html",
    css: "css",
    javascript: "js",
    typescript: "ts",
    react: "react",
    node: "node",
    php: "php",
    tailwind: "tailwind",
    express: "express",
    mongodb: "mongoDb",
    mysql: "mysql",
    git: "git",
    github: "github",
    jwt: "text-white",
    jsonserver: "jsondata",
    boostrap:"bootstrap"
  };

  return (
    <div className=" mt-5 px-2 pb-2 mr-1">
      {children
        ?.toLowerCase()
        .split(",")
        .map((tech: string) => (
          <span
            key={tech}
            className={`inline-block  rounded-full  font-bold  text- text-gray-700  mt-2 ${design[tech ]} `}
          >
            <span className={`${textDesign[tech]} inline-block bg-grey-lighter rounded-full  text-sm font-semibold text-grey-darker px-2 first-letter:uppercase `}>{tech}</span>
          </span>
        ))}
    </div>
  );
};

export default Comparador;
