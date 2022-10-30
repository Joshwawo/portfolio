import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/AdminPanel";
import { PostProvider } from "./context/BlogContext";
import Testing from "./pages/Testing";
import RutasProtegidas from "./layouts/RutasProtegidas";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";


const App = () => {
  //esta linea de codigo toma vida todas las noches
  // document.body.style.backgroundColor = "gray";
  return (
    <div className="">
      <PostProvider value={undefined}>
        <AuthProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/login" element={<Login />} />
           

            {/* Auth, routes */}
            <Route path="/panel" element={<RutasProtegidas />}>
              <Route index element={<AdminPanel />} />
              
            </Route>
          </Routes>
        </AuthProvider>
      </PostProvider>
    </div>
  );
};

export default App;
