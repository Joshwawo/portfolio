// import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { useState, useEffect, Fragment } from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { Ring } from "@uiball/loaders";
import * as yup from "yup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/dall-e/Header";
import "../../styles/Images.css";
import { useAuth } from "../../context/AuthProvider";
import Alerta from "../../helpers/Alerta";
import {
  DalleTypes,
  Datum,
  imagesGenerated,
  Dalle2Types,
} from "../../interfaces/DalleTypes";
import { useNavigate } from "react-router-dom";
import { randomPrompts } from "../../components/dall-e/dataPrompts";

export const Images = () => {
  const [prompt, setprompt] = useState("");
  const [resolution, setresolution] = useState("");
  const [alerta, setAlerta] = useState({});
  const [imagenes, setImagenes] = useState([]);
  // const [imagenUsario, setImagenUsuario] = useState<DalleTypes[]>([]);
  const [imagenUsario, setImagenUsuario] = useState<Dalle2Types[]>(
    [] as Dalle2Types[]
  );

  const { auth: usuario } = useAuth();
  const LOCALDEV = `${import.meta.env.VITE_IP_LOCAL}`;
  const PROD = `${import.meta.env.VITE_IP_PROD}`;

  const navigate = useNavigate();
  const tokenDalle = localStorage.getItem("token");

  // let randomPrompts = "hola*como*estas";
  // const randomPrompt = arrayPrompts[0];
  //   console.log(randomPrompt)

  const postSearchImage = async (datos: any) => {
    try {
      const respuesta = await axios.post(`${LOCALDEV}/openai/dalle`, datos, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenDalle}`,
        },
      });
      // console.log(respuesta.data.data);
      setImagenes(respuesta.data.data);
      // console.log(respuesta.data);
      // setprompt("");
      datos.prompt = "";
    } catch (error: any) {
      console.log(error?.response.data.message);
      setAlerta({
        message: error?.response.data.message,
        error: true,
      });
    }
  };

  // console.log(usuario);

  useEffect(() => {
    const getImagesByUser = async () => {
      try {
        const respuesta = await axios.get(`${LOCALDEV}/openai/images`, {
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

    // imagenes.map(imagen => console.log(imagen));
  }, [imagenes]);

  useEffect(() => {
    document.body.classList.add("body-images");
    return () => {
      document.body.classList.remove("body-images");
    };
  }, []);

  // const hanleRandomPrompt = () => {
  //   randomPrompts.split("*").join(" ");
  //   const arrayPrompts = randomPrompts.split("*");
  //   const randomPrompt =
  //     arrayPrompts[Math.floor(Math.random() * arrayPrompts.length)];
  //   console.log(randomPrompt);
  //   setprompt(randomPrompt);
  // };

  const { message } = alerta as any;

  return (
    <div className="dark:text-white grid  auto-rows-[auto_1fr]">
      {/* <Header /> */}
      <div
        className="min-h-screen
      "
      >
        <div className="mx-auto max-w-2xl w-4/5 mt-10">
          <p className="text-Dcardblack dark:text-pink-500 text-sm mb-2">
            <span className="dark:text-white text-black ">{usuario.name} </span>{" "}
            Start with a detailed description of what you want to see

          </p>
          {/* <button onClick={hanleRandomPrompt}>Random Prompt</button> */}
          {message && <Alerta alerta={alerta} />}
          {/* <button onClick={hanleRandomPrompt}>Random Prompt</button> */}
          {/* <button onClick={hanleRandomPrompt}>Random Prompt</button> */}

          <Formik
            validationSchema={yup.object({
              prompt: yup.string().required("Prompt is Required"),
              resolution: yup.string().required("Resolution is Required")
              .when("prompt", {
                is: (prompt: string) => prompt?.length > 0,
                then: yup.string().required("Resolution is Required"),
              }),
            })}
            onSubmit={(values, actions) => {
              // console.log(values);
              // console.log(actions);
              postSearchImage(values).then(() => {
                actions.setSubmitting(false);
                // actions.resetForm( {values:{
                //   prompt: "",

                // }});
              });
            }}
            initialValues={{ prompt, resolution }}
            validateOnChange={true}
          >
            {({
              handleSubmit,
              isSubmitting,
              values,
              setValues,
            }) => {
              const hanleRandomPrompt = (e: any) => {
                e.preventDefault();
                randomPrompts.split("*").join(" ");
                const arrayPrompts = randomPrompts.split("*");
                const randomPrompt =
                  arrayPrompts[Math.floor(Math.random() * arrayPrompts.length)];
                // console.log(randomPrompt);
                setValues({ ...values, prompt: randomPrompt });
              };

              return (
                <Form onSubmit={handleSubmit}>
                  <ErrorMessage
                    name="prompt"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                  <ErrorMessage
                    name="resolution"
                    component="div"
                    className="text-red-500 text-sm mb-2"
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
                      className="block p-4 pl-10 pr-[6.5rem] w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                      placeholder="Enter a prompt to generate an image"
                      name="prompt"
                    // values={values.prompt}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                    >
                      {isSubmitting ? (
                        <span className="flex gap-1">
                          <Ring size={20} color="white" />
                        </span>
                      ) : (
                        "Generate"
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="text-sm bg-Dcardwhite hover:bg-Dcardwhite/80 hover:shadow-Dcardblack dark:bg-pink-500 dark:hover:bg-pink-6 00 rounded px-4 py-2 " onClick={hanleRandomPrompt}>Surprise me 👀</button>
                    <Field
                      as="select"
                      name="resolution"
                      className="dark:bg-transparent border focus:outline-none p-2 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600  dark:focus:ring-pink-500 dark:focus:border-pink-500"
                    >
                      <option
                        value=""
                        selected={true}
                        disabled={true}
                        hidden={true}
                        className="dark:bg-Dcardblack dark:text-white "
                      >
                        Select resolution
                      </option>
                      <option
                        value="256x256"
                        className="dark:bg-Dcardblack dark:text-white "
                      >
                        256 x 256
                      </option>
                      <option
                        value="512x512"
                        className="dark:bg-Dcardblack dark:text-white "
                      >
                        512 x 512
                      </option>
                      <option
                        value="1024x1024"
                        className="dark:bg-Dcardblack dark:text-white "
                      >
                        1024 x 1024
                      </option>
                    </Field>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <section className="mt-10 max-w-3xl mx-auto w-4/5">
          {imagenes.length >= 1 && <h2 className="text-xl text-center">Output image</h2>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imagenes?.map((imagen: imagesGenerated, index) => (
              <Fragment key={index}>
                <img
                  src={imagen.url}
                  alt="Imagen generada por dalle"
                  className="rounded mt-4"
                />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mt-10 mx-auto">
          <h2 className="text-center text-xl">
            Your generated images -{" "}
            <span className="text-indigo-600  dark:text-pink-500 py-2 rounded text-sm">
              You currently have {imagenUsario.length}
            </span>
            <p className="block text-xs dark:text-Tcardwhite font-bold ">Currently images are deleted every 48 hours, due to problems with cloud services.  😔</p>
            <p className="block text-xs clear-left dark:text-Tcardwhite">So if you want to keep them after that time, I recommend saving them to your device.</p>
          </h2>

          {/* <div className='sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 my-10 gap-x-3 px-10'>
            {imagenUsario.map(({ data }:DalleTypes) =>
              data.map((image: Datum, index) => (
                <Fragment key={index}>
                  {image.url && (
                    <img src={image.url} loading={'lazy'} className="w-full rounded mb-3 transition-transform cursor-pointer hover:scale-105"
                      onError={(e) => {
                        // e.currentTarget.src = "https://via.placeholder.com/150"
                        e.currentTarget.style.display =
                          'none';
                        e.cancelable = true;
                      }}
                    />
                  )}
                </Fragment>
              ))
            )}
          </div> */}

          <div className="sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 my-10 gap-x-3 px-10 ">
            {imagenUsario.map((data) => (
              <Fragment key={data._id}>
                <img src={data.cloudinarySave.url} alt={data.prompt} />
                <p>prompt: {data.prompt}</p>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
      <footer className="flex px-6 py-5 dark:bg-[#363636] bg-slate-100">
        <nav>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://twitter.com/Joshwawo"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <BsTwitter className="dark:text-white text-[#242424] hover:text-pink-500 w-5 h-5 transition-colors" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <BsGithub className="dark:text-white text-[#242424] hover:text-pink-500 w-5 h-5 transition-colors" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
