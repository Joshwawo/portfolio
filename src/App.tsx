import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';
import AdminPanel from './pages/AdminPanel';
import { PostProvider } from './context/BlogContext';
import Testing from './pages/Testing';
import RutasProtegidas from './layouts/RutasProtegidas';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { Images } from './pages/Images';

const App = () => {
  let path = useLocation();
  //esta linea de codigo toma vida todas las noches
  // document.body.style.backgroundColor = "#101010";
  // document.body.style.backgroundColor = "gray";
  return (
    <div className=''>
      <PostProvider value={undefined}>
        <AuthProvider>
          <ToastContainer />
          {path.pathname.startsWith('/usuarios') ? null : <Navbar />}
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/login' element={<Login />} />

            {/* Auth, routes */}
            <Route path='/usuarios' element={<RutasProtegidas />}>
              {/* <Route index element={<AdminPanel />} /> */}
              <Route path='images' element={<Images />} />
            </Route>
          </Routes>
        </AuthProvider>
      </PostProvider>
    </div>
  );
};

export default App;
