import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/porfolio/Homepage";
import Error404 from "./pages/http-codes/Error404";

import AdminPanel from "./pages/porfolio/AdminPanel";
import { PostProvider } from "./context/BlogContext";
import Testing from "./pages/Testing";
import RutasProtegidas from "./layouts/RutasProtegidas";
import Login from "./pages/logIn-signIn/Login";

import { ToastContainer } from "react-toastify";
import { Images } from "./pages/dalle-2/Images";
import Lexica from "./pages/Lexica";
import Register from "./pages/logIn-signIn/Register";
import ConfirmAC from "./pages/logIn-signIn/ConfirmAC";
import { useAuth } from "./context/AuthProvider";
import { Error403 } from "./pages/http-codes/Error403";
import SearchEngine from "./components/SearchEngine/SearchEngine";
import SeUpImg from "./components/SearchEngine/SeUpImg";
import NavbarTemp from "./helpers/NavbarTemp";
import TTS from "./pages/textToSpeech/TTS";

const App = () => {
  let path = useLocation();
  const { auth: usuario } = useAuth();

  //esta linea de codigo toma vida todas las noches
  // document.body.style.backgroundColor = "#101010";
  // document.body.style.backgroundColor = "gray";
  // console.log(
  //   //como ver la preferia de color del usuario
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  // );

  return (
    <div className="">
      <PostProvider value={undefined}>
        <ToastContainer />
        {/* {path.pathname.startsWith("/usuarios" ) ? null : <Navbar />} */}
        {/* {path.pathname.startsWith("/auth") ? null : null} */}
        {/* {path.pathname.startsWith("/auth") ? null : <Navbar/>} */}
        {/* {path.pathname.startsWith("/login") ? null : <Navbar />} */}
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/testing" element={<Testing />} />

          {/* Auth, routes */}
          <Route path="/auth" element={<NavbarTemp />}>
            <Route path="*" element={<Error404 />} />
            <Route path="login" element={<Login />} />
            <Route path="lexica" element={<Lexica />} />
            <Route path="register" element={<Register />} />
            <Route path="confirm/:token" element={<ConfirmAC />} />
          </Route>

          {/* Rutas Auth */}
          <Route path="/usuarios" element={<RutasProtegidas />}>
            <Route path="/usuarios/*" element={<Error404 />} />
            <Route path="images" element={<Images />} />
            <Route
              path="admin"
              element={usuario.isAdmin ? <AdminPanel /> : <Error403 />}
            />
            <Route path="se" element={<SearchEngine />} />
            <Route path="uploadse" element={<SeUpImg />} />
            <Route path="tts" element={<TTS />} />
          </Route>
        </Routes>
      </PostProvider>
    </div>
  );
};

export default App;
