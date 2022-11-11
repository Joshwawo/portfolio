import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/ClienteAxios";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import Alerta from "../helpers/Alerta";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [alerta, setAlerta] = useState({});
  //TODO: regEx para validar email
  //TODO: REPARAR EL ESPAGUETTI CODE
  const register = async (datos: any) => {
    try {
    //   console.log(datos);
      if (datos.password !== datos.passwordConf) {
        setAlerta({
          message: "Las contraseñas no coinciden",
          error: true,
        });
        return;
      }
      const { name, email, password, passwordConf } = datos;
      const toSend = {
        name,
        email,
        password,
      };

      const respuesta = await clienteAxios.post("/register", toSend);
    //   console.log(respuesta.data);
    } catch (error: any) {
      console.log(error?.response.data.message);
      setAlerta({
        message: error?.response.data.message,
        error: true,
      });
    }
  };
  const { message } = alerta as any;

  return (
    <>
      {message && <Alerta alerta={alerta} />}
      <div className="flex justify-center items-center h-screen">
        <Formik
          initialValues={{ name, email, password, passwordConf }}
          onSubmit={(values, actions) => {
            
            register({
              name: values.name,
              email: values.email,
              password: values.password,
              passwordConf: values.passwordConf,
            });
          }}
          validationSchema={yup.object({
            name: yup.string().required("El nombre es requerido"),
            email: yup.string().required("El email es requerido"),
            password: yup.string().required("El password es requerido"),
            passwordConf: yup.string().required("El password es requerido"),
          })}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>

                <Field
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nombre"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="passwordConf"
                >
                  Confirmar Password
                </label>
                <Field
                  type="password"
                  id="passwordConf"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirmar Password"
                  name="passwordConf"
                />
                <ErrorMessage
                  name="passwordConf"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/login"
                >
                  Ya tienes una cuenta?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
