import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { useState, useEffect, Fragment } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Ring } from "@uiball/loaders";

import { useAuth } from "../context/AuthProvider";
import Alerta from "../helpers/Alerta";

export const Images = () => {
  const [prompt, setprompt] = useState("");
  const [resolution, setresolution] = useState("");
  const [alerta, setAlerta] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [imagenUsario, setImagenUsuario] = useState([]);

  const { auth: usuario } = useAuth();
  const LOCALDEV = `${import.meta.env.VITE_IP_LOCAL}`;
  const PROD = `${import.meta.env.VITE_IP_PROD}`;

  const tokenDalle = localStorage.getItem("token");
  const postSearchImage = async (datos: any) => {
    try {
      const respuesta = await axios.post(`${PROD}/openai/dalle`, datos, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenDalle}`,
        },
      });
      //   console.log(respuesta.data.data);
      setImagenes(respuesta.data.data);
      setprompt("");
      datos.prompt = "";
    } catch (error: any) {
      console.log(error?.response.data.message);
      setAlerta({
        message: error?.response.data.message,
        error: true,
      });
    }
  };

  useEffect(() => {
    const getImagesByUser = async () => {
      try {
        const respuesta = await axios.get(`${PROD}/openai/images`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenDalle}`,
          },
        });
        // console.log(respuesta.data);
        setImagenUsuario(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesByUser();
  }, [imagenes]);

  const { message } = alerta as any;

  return (
    <>
      <main className="dark:text-Dcardwhite">
        <section className="container mx-auto mt-10">
          <h1 className="text-center">
            Hola {usuario.name} 🖐️, toma en cuenta esto
          </h1>
          <div className="bg-blue-40  my-5">
            <p className="text-center">
              Tienes {usuario.credits} creditos, para generar imagenes, como
              esta en estado beta la libreria de Open AI, me limita las
              peticiones{" "}
            </p>
            <p className="text-center">Tienes 5 creditos por registrarte</p>
            <p className="text-center">
              Si ocupas mas, puedes hablarme por{" "}
              <a
                className="text-blue-600"
                target={"_blank"}
                href="https://twitter.com/Joshwawo"
              >
                twitter
              </a>{" "}
              y con gusto te puedo dar mas gratis.{" "}
            </p>
            <p className="text-center text-red-500">
              Las imagenes se borran cada hora, si las quieres conservar
              guardalas en tu dispositivo
            </p>
          </div>
          {message && <Alerta alerta={alerta} />}

          <Formik
            validationSchema={yup.object({
              prompt: yup.string().required("El prompt es requerido"),
              resolution: yup.string().required("La resolucion es requerida"),
            })}
            onSubmit={(values, actions) => {
              // console.log("Me diste click");
              console.log(values);
              postSearchImage(values).then(() => {
                actions.setSubmitting(false);
                // actions.resetForm( {values:{
                //   prompt: "",
                
                // }});
              });
            }}
            initialValues={{ prompt,resolution }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <ErrorMessage
                  name="prompt"
                  component="div"
                  className="text-red-500"
                />
                <ErrorMessage
                  name="resolution"
                  component="div"
                  className="text-red-500"
                 />
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <Field
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                    placeholder="Ingresa un propmpt para generar una imagen"
                    name="prompt"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  >
                    {isSubmitting ? (
                      <span className="flex gap-1">
                        Generando <Ring size={20} color="white" />
                      </span>
                    ) : (
                      "Generar"
                    )}
                  </button>
                </div>
                <Field
                  as="select"
                  name="resolution"
                  className="dark:bg-Dcardwhite dark:text-Dcardblack"
                >
                  <option value="">Selecciona una resolucion</option>
                  <option value="256x256">256 x 256</option>
                  <option value="512x512">512 x 512</option>
                  <option value="1024x1024">1024 x 1024</option>
                </Field>
              </Form>
            )}
          </Formik>
        </section>
        <section className="mt-10 container mx-auto">
          <h2 className="text-center">
            Imagenes Generada - de momento solo genera una por peticion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imagenes?.map((imagen: any, index) => (
              <Fragment key={index}>
                <img src={imagen.url} alt="imagen generada por dalle" />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mt-10  container mx-auto min-h-screen ">
          <h2 className="text-center text-xl">
            Tus imagenes generadas -{" "}
            <span className="bg-yellow-200 dark:bg-pink-500 dark:text-Tcardwhite py-1 px-2 rounded text-sm">
              Recuerda que solo duran una hora
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {imagenUsario.map(({ data }: any, index) =>
              data.map((image: any, index: any) => (
                <Fragment key={index}>
                  {image.url && (
                    <div className="">
                      <img
                        src={image.url}
                        onError={(e) => {
                          // e.currentTarget.src = "https://via.placeholder.com/150"
                          e.currentTarget.style.display = "none";
                          e.cancelable = true;
                        }}
                      />
                    </div>
                  )}
                </Fragment>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
};
