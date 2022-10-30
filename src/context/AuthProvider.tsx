import { useNavigate } from "react-router-dom";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import clienteAxios from "../config/ClienteAxios";

type AuthTypes = {
  hola: string;
  setAuth: {
    (value: React.SetStateAction<{}>): void;
  };
  auth: any;
  cargando: boolean;
};
type ChildrenTypes = {
  children: ReactNode;
};

const authContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider = ({ children }: ChildrenTypes) => {
  const [hola, setHola] = useState("Hola desde useAuth");
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  //   console.log(auth);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const getToken = localStorage.getItem("token");

      if (!getToken) {
        setCargando(false);
        return;
      }

      try {
        // const { data } = await clienteAxios.get("/api/usuarios/perfil", {
        //   headers: {
        //     "content-Type": "application/json",
        //     Authorization: `Bearer ${getToken}`,
        //   },
        // });
        const { data } = await clienteAxios.get("/register/perfil", {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${getToken}`,
          },
        });
        setAuth(data);
        // console.log(data);
        // navigate("/auth");
        
      } catch (error) {
        setAuth({});
      } finally {
        setCargando(false);
      }
    };
     autenticarUsuario() 
  }, []);

  return (
    <authContext.Provider value={{ hola, setAuth, auth, cargando }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
