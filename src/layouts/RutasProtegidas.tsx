import { useAuth } from '../context/AuthProvider';
import { Outlet, Navigate } from 'react-router-dom';

const RutasProtegidas = () => {

  const {auth,cargando} = useAuth();
  console.log(auth._id)
  // console.log(auth._id);

  // const cerrarSesion = () => {
  //   setAuth({});
  //   localStorage.removeItem('token');
  // }
  // if()
  // if(cargando){
  //   return <h1>Cargando...</h1>
  // }
  if(cargando) return <h1>Cargando...</h1>

  return (
    <>
      {
        auth._id ? <Outlet /> : <Navigate to="/login"/>
      }
    </>
  )
}

export default RutasProtegidas