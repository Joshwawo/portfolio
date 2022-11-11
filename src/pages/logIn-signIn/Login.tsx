import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { usePost } from "../../context/BlogContext";
import { FiCloudLightning } from "react-icons/fi";
import { useAuth } from "../../context/AuthProvider";
import Alerta from "../../components/helpers/Alerta";
import clienteAxios from "../../config/ClienteAxios";
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
      setAlerta({ message: "All fields are required", error: true });
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
    <div className="h-screen">
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

      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFFDE] dark:bg-[#242424]">
        <div className="flex flex-col bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
         
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
              
            </p>
          </div>
        </div>
      </div> */}
      {message && <Alerta alerta={alerta} />}
      <div className="flex flex-wrap w-full content-center justify-center  py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: "24rem", height: "35rem" }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*****"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700 dark:accent-pink-500"
                  />{" "}
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember for 30 days
                  </label>
                  <span  className="text-xs font-semibold text-purple-70 text-gray-500/50 cursor-not-allowed">
                    Forgot password?
                  </span>
                </div>

                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white dark:bg-pink-500 dark:hover:bg-pink-600 bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Sign in
                  </button>
                  
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold px-2">
                  Don't have account?
                </span>
                <Link to={"/auth/register"} className="text-xs font-semibold text-purple-700 dark:text-pink-500">
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <div
                className="hidden md:block flex-wrap content-center justify-center rounded-r-md"
                style={{ width: "25rem", height: "35rem" }}
              >
                <img
                  className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
                  src="https://i.imgur.com/9l1A4OS.jpeg"
                />
              </div>
        </div>

        
      </div>
    </div>
  );
};

export default Login;
