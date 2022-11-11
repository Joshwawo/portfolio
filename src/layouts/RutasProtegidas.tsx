import { useAuth } from '../context/AuthProvider';
import { Outlet, Navigate } from 'react-router-dom';
import {Ring} from '@uiball/loaders'
import Navbar from '../components/dall-e/Header';

const RutasProtegidas = () => {

  const {auth,cargando} = useAuth();
  // console.log(auth)
  // console.log(auth._id);

  // const cerrarSesion = () => {
  //   setAuth({});
  //   localStorage.removeItem('token');
  // }
  // if()
  // if(cargando){
  //   return <h1>Cargando...</h1>
  // }
  if(cargando) {
    return (
      <div className="container mx-auto flex justify-center mt-10 bg-[#FFFFFFDE]
      ">
        <Ring color='black' lineWeight={4} size={30} speed={2} />
      </div>
    )
  }
  // auth.isAdmin ?  <AdminPanel/> : <Outlet /> ?  <Navigate to="/login"/>
  return (
    <>
    <Navbar/>
      {
        auth._id ?  <Outlet /> : <Navigate to="/auth/login"/>
      }
    </>
  )
}

export default RutasProtegidas