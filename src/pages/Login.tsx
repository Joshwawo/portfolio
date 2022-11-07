import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { usePost } from "../context/BlogContext";
import { FiCloudLightning } from "react-icons/fi";
import { useAuth } from "../context/AuthProvider";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/ClienteAxios";
import { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({ error: false, message: "" });

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // console.log(hola);
  // console.log(firstPost);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({ message: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      // const { data } = await clienteAxios.post("/api/usuarios/login", {
      //   email,
      //   password,
      // });
      const { data } = await clienteAxios.post("/register/login", {
        email,
        password,
      });
      // console.log(data)}
      setAlerta({} as any);
      // console.log(data)
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/usuarios/images");
      // console.log
    } catch (error: any) {
      // console.log(error?.response?.data?.message);
      setAlerta({ message: error?.response?.data.message, error: true });
    }
  };

  const { message } = alerta;

  return (
    <>
      {/* {message && <Alerta alerta={alerta} />}

      <form onSubmit={handleSubmit} className="mt-10  shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="email"
            className=" uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email de registro"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className=" uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Introducce tu contraseña"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          className="bg-sky-700 uppercase w-full mb-5 py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to={"/registrar"}
          className="block text-center mt-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          to={"/olvide-password"}
          className="block text-center mt-5 text-slate-500 uppercase text-sm"
        >
          Olvide mi password
        </Link>
      </nav> */}

      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFFDE] dark:bg-[#242424]">
        <div className="flex flex-col bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          {/* <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Login To Your Account
          </div> */}
          {/* <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span>Login with Facebook</span>
          </button> */}
          <div className="relative mt-10 h-px shadow-md">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase ">
                Iniciar Sesion
              </span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Correo Electronico:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <a
                    href="#"
                    className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                  >
                    {/* Forgot Your Password? */}
                  </a>
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-indigo-600/90 hover:bg-indigo-700 dark:bg-pink-500 dark:hover:bg-pink-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Iniciar Sesion</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <p className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
              {message && <p className="text-red-600">{message}</p>}
              {/* <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span> */}
              {/* <span className="ml-2">You don't have an account?</span> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
