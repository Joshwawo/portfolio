import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/ClienteAxios";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import Alerta from "../../helpers/Alerta";

import { Ring } from "@uiball/loaders";

type AlertaTypes ={
  message: string;
  error: boolean;
}

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [alerta, setAlerta] = useState({
    message: "",
    error: false,
  });
  //TODO: regEx para validar email
  //TODO: REPARAR EL ESPAGUETTI CODE
  const register = async (datos: any) => {
    try {
      //   console.log(datos);
      if (datos.password !== datos.passwordConf) {
        setAlerta({
          message: "PASSWORDS DO NOT MATCH",
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

      const {data} = await clienteAxios.post("/register", toSend);
      setAlerta({
        message: data.message,
        error: false,
      });
    } catch (error: any) {
      // console.log(error?.response.data.message);
      setAlerta({
        message: error?.response.data.message,
        error: true,
      });
    }
  };
  const { message } = alerta as any;

  return (
    <div className="h-screen">
      {message && <Alerta alerta={alerta} />}
      <div className="flex justify-center items-center h-scree">
        <Formik
          initialValues={{ name, email, password, passwordConf }}
          onSubmit={(values, actions) => {
            // console.log(values);
            register({
              name: values.name,
              email: values.email,
              password: values.password,
              passwordConf: values.passwordConf,
            }).then(() => {
              actions.setSubmitting(false);  
              // console.log('LLegue aqui then')
              // actions.resetForm();
            }).catch(() => {
              actions.setSubmitting(false);
              // console.log('No se envioo')
            })
          }}
          validationSchema={yup.object({
            name: yup.string().required("Name is required"),
            email: yup.string().required("Email is required"),
            password: yup.string().required("Password is required"),
            passwordConf: yup.string().required("Password is required"),
          })}
        >
          {({ handleSubmit, isSubmitting }) => (
            <div className="flex shadow-md">
              <div
                className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                style={{ width: "22rem", height: "35rem" }}
              >
                <div className="w-78">
                  <h1 className="text-xl font-semibold">Welcome </h1>
                  <small className="text-gray-400">
                    Welcome! Please enter your details
                  </small>

                  <Form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                      <label className="mb-2 block text-xs font-semibold">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 block text-xs font-semibold">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="mb-2 block text-xs font-semibold">
                        Password
                      </label>
                      <Field
                        type="password"
                        placeholder="*****"
                        name="password"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 block text-xs font-semibold">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        placeholder="*****"
                        name="passwordConf"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                      />
                      <ErrorMessage
                        name="passwordConf"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-3 flex flex-wrap content-center">
                      {/* <Field
                        id="remember"
                        type="checkbox"
                        className="mr-1 checked:bg-purple-700"
                      />{" "}
                      <label
                        htmlFor=""
                        className="mr-auto text-xs font-semibold"
                      >
                        Remember for 30 days
                      </label> */}
                      
                    </div>

                    <div className="mb-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mb-1.5 block w-full text-center text-white dark:bg-pink-500 dark:hover:bg-pink-600 bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                      >
                        {isSubmitting ? (
                          <span className="flex justify-center">
                            Processing{" "}
                            <Ring
                              size={20}
                              lineWeight={5}
                              speed={2}
                              color="white"
                            />{" "}
                          </span>
                        ) : (
                          "Sign up"
                        )}
                      </button>
                    </div>
                  </Form>

                  <div className="text-center">
                    <span className="text-xs text-gray-400 font-semibold">
                      Have an account already
                    </span>
                    <Link
                      to={"/login"}
                      className="text-xs  font-semibold text-purple-700 dark:text-pink-500 px-2"
                    >
                      Sign in
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
          )}
        </Formik>
      </div>

      {/* <FormRegister /> */}
    </div>
  );
};

export default Register;
