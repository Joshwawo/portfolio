import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/ClienteAxios";
import Alerta from "../../helpers/Alerta";

const ConfirmAC = () => {
  const [alerta, setAlerta] = useState({});
  const [confirmAccount, setConfirmAccount] = useState(false);

  const { token } = useParams<{ token: string }>();
  //   console.log(token);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const respuesta = await clienteAxios.get(`/register/confirm/${token}`);
        // /confirm/:token
        // console.log(respuesta.data);
        setAlerta({
          message: respuesta.data.message,
          error: false,
        });
        setConfirmAccount(true);
      } catch (error: any) {
        console.log(error?.response.data.message);
        setAlerta({
          message: error?.response.data.message,
          error: true,
        });
      }
    };
    // return () => confirmarCuenta() as any;
    confirmarCuenta();
  }, [token]);

  const { message } = alerta as any;

  return (
    <>
      <div className=" container mx-auto h-screen">
        {message && <Alerta alerta={alerta} />}

        <div className="py-5  bg-white">
          {confirmAccount && (
            <Link
              to={"/login"}
              className="block  text-black text-center mt-5  uppercase text-sm"
            >
              inicia sesión
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmAC;
