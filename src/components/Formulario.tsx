import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { PostBlog } from "../interfaces/PostBlog";
import { useState } from "react";
import { usePost } from "../context/BlogContext";

const Formulario = () => {
  const { createBlog } = usePost();

  const [posts, setPosts] = useState<PostBlog>({
    title: "",
    descripcion: "",
    tech: "",
    proyectUrl: "",
    image: null,
    github: "",
    dateInit: "",
    dateEnd: "",
  } as PostBlog);
  return (
    <div>
      <div className="  px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
        <Formik
          initialValues={posts}
          onSubmit={(values, actions) => {
            console.log(`Hola me diste click ${values}`);
            createBlog(values);
            console.log(values);
            // console.log(values.image);
            // console.log(values)
          }}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <div className=" p-8 bg-white rounded-lg shadow-lg lg:p-12 log-col-span-3">
              <Form onSubmit={handleSubmit} className="space-y-4">
                <div className=" titulo">
                  <label htmlFor="title" className=" roboto-regular">
                    Titulo del posts
                  </label>
                  <Field
                    name="title"
                    id="title"
                    placeholder="Introduce un titulo"
                    className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-300"
                  />
                </div>
                <div className=" descripcion">
                  <label htmlFor="descripcion" className="roboto-regular ">
                    Descripción del post
                  </label>
                  <Field
                    name="descripcion"
                    id="descripcion"
                    placeholder="Introduce una Descripción"
                    className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-300"
                  />
                </div>
                <div className=" Tecnologías">
                  <label htmlFor="tech" className="roboto-regular ">
                    Tecnologías Usadas{" "}
                    <span className=" text-xs text-pink-600 roboto-regular">
                      {" "}
                      Introduce las techs separadas por comas
                    </span>
                  </label>
                  <Field
                    name="tech"
                    id="tech"
                    placeholder="Eje: React,Javascrip,Typescrip,Tailwind,Node"
                    className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className=" github">
                  <label htmlFor="github" className="roboto-regular ">
                    Repositorio de Gitgub
                  </label>
                  <Field
                    name="github"
                    id="github"
                    placeholder="Introduce el link al repositorio de gitub"
                    className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className=" demo">
                  <label htmlFor="demo" className="roboto-regular ">
                    Url al proyecto
                  </label>
                  <Field
                    name="proyectUrl"
                    id="demo"
                    placeholder="Introduce el link al proyecto"
                    className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="imagen ">
                  <input
                    type="file"
                    className=" block w-full text-sm text-slate-500 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    placeholder="hola maiugos"
                    onChange={(evento) =>
                      setFieldValue("image", evento.target.files?.[0])
                    }
                  />
                </div>

                <div className="divo date picker">
                <label htmlFor="date" className="roboto-regular block ">
                    choose a beetwen date to show in the blog
                  </label>
                  {/* <div className="flex flex-col space-y-2"> */}
                    {/* <div className="flex flex-col space-y-2"> */}
                      <label htmlFor="date" className="roboto-regular ">
                        Date init
                      </label>
                      <Field
                        name="dateInit"
                        id="date"
                        type="date"
                        className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-400"
                      />

                      <label htmlFor="date" className="roboto-regular ">
                        Date end
                      </label>
                      <Field
                        name="dateEnd"
                        id="date"
                        type="date"
                        className=" w-full p-3 text-sm border-gray-200 rounded-lg outline-none placeholder:text-gray-400"
                      />


                  

                 
                      

                  


                </div>
                <input className="bg-red-300 hover:bg-red-500 px-2 py-2 rounded-lg" type="reset" value="reset form" />

                <button
                  className="bg-violet-500 block hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring rounded-lg py-1 px-2 text-white "
                  type="submit"
                  // disabled={isSubmitting}
                >
                  {/* {isSubmitting ? <p>Enviando...</p> : "Guardar"} */}
                  Enviar
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>

      <div className="didvo"></div>
    </div>
  );
};

export default Formulario;
