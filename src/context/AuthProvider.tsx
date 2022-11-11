import { useNavigate,useLocation } from "react-router-dom";
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

type AuthContextTypes = {
  name?: string;
  email?: string;
  password?: string;
  _id?: string;
  credits?: number;
  confirmado?: boolean;
};

const authContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider = ({ children }: ChildrenTypes) => {
  const [hola, setHola] = useState("Hola desde useAuth");
  const [auth, setAuth] = useState({} as AuthContextTypes);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  const path = useLocation();

  // console.log(auth);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const getToken = localStorage.getItem("token");

      if (!getToken) {
        setCargando(false);
        return;
      }

      try {
        const { data } = await clienteAxios.get("/register/perfil", {
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${getToken}`,
          },
        });
        setAuth(data);
      } catch (error) {
        setAuth({});
      } finally {
        setCargando(false);
      }
    };

    //how to redirect to /usuaruios when the user is not logged in
    autenticarUsuario();
    // if(path.pathname.startsWith("/login") && !auth._id){
    //   navigate("/usuarios/images")
    //   console.log('Lluendo desde el auth provider')
    // }else{
    //   autenticarUsuario();
    // }

    

    
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
