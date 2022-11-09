// import { toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useState, useEffect, Fragment } from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { Ring } from '@uiball/loaders';
import * as yup from 'yup';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/dall-e/Header';
import '../styles/Images.css';

import { useAuth } from '../context/AuthProvider';
import Alerta from '../helpers/Alerta';
import {DalleTypes,Datum,imagesGenerated} from '../interfaces/DalleTypes'




export const Images = () => {
  const [prompt, setprompt] = useState('');
  const [resolution, setresolution] = useState('');
  const [alerta, setAlerta] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [imagenUsario, setImagenUsuario] = useState<DalleTypes[]>([]);

  const { auth: usuario } = useAuth();
  const LOCALDEV = `${import.meta.env.VITE_IP_LOCAL}`;
  const PROD = `${import.meta.env.VITE_IP_PROD}`;

  const tokenDalle = localStorage.getItem('token');
  const postSearchImage = async (datos: any) => {
    try {
      const respuesta = await axios.post(`${PROD}/openai/dalle`, datos, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenDalle}`,
        },
      });
        console.log(respuesta.data.data);
      setImagenes(respuesta.data.data) 
      setprompt('');
      datos.prompt = '';
    } catch (error: any) {
      console.log(error?.response.data.message);
      setAlerta({
        message: error?.response.data.message,
        error: true,
      });
    }
  };
  
  // console.log(imagenes);

  useEffect(() => {
    const getImagesByUser = async () => {
      try {
        const respuesta = await axios.get(`${PROD}/openai/images`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenDalle}`,
          },
        });
        // console.log(respuesta.data);
        setImagenUsuario(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesByUser();
    imagenes.map(imagen => console.log(imagen));

  }, [imagenes]);

  useEffect(() => {
    document.body.classList.add('body-images');
    return () => {
      document.body.classList.remove('body-images');
    };
  }, []);

  const { message } = alerta as any;

  return (
    <div className='dark:text-white grid min-h-screen auto-rows-[auto_1fr]'>
      <Header />
      <div>
        <div className='mx-auto max-w-2xl w-4/5 mt-10'>
          <p className='text-red-500 text-sm mb-2'>
            Las imagenes se borran despues de una hora, si las quieres conservar guardalas en tu dispositivo.
          </p>
          {message && <Alerta alerta={alerta} />}

          <Formik
            validationSchema={yup.object({
              prompt: yup
                .string()
                .required('El prompt es requerido'),
              resolution: yup
                .string()
                .required('La resolucion es requerida'),
            })}
            onSubmit={(values, actions) => {
              // console.log("Me diste click");
              console.log(values);
              postSearchImage(values).then(() => {
                actions.setSubmitting(false);
                // actions.resetForm( {values:{
                //   prompt: "",

                // }});
              });
            }}
            initialValues={{ prompt, resolution }}>
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <ErrorMessage name='prompt' component='div' className='text-red-500 text-sm' />
                <ErrorMessage name='resolution' component='div' className='text-red-500 text-sm mb-2' />
                <label
                  htmlFor='default-search'
                  className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
                  Search
                </label>
                <div className='relative'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor'
                      viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                    </svg>
                  </div>
                  <Field
                    type='search'
                    id='default-search'
                    className='block p-4 pl-10 pr-[6.5rem] w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500'
                    placeholder='Ingresa un prompt para generar una imagen'
                    name='prompt'
                  />
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'>
                    {isSubmitting ? (
                      <span className='flex gap-1'>
                        Generando{' '}
                        <Ring size={20} color='white' />
                      </span>
                    ) : (
                      'Generar'
                    )}
                  </button>
                </div>
               <div className='flex justify-end mt-2'>
                 <Field
                   as='select'
                   name='resolution'
                   className='dark:bg-transparent border focus:outline-none p-2 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600  dark:focus:ring-pink-500 dark:focus:border-pink-500'>
                   <option value='' className='dark:bg-Dcardblack dark:text-white '>
                     Selecciona una resolucion
                   </option>
                   <option value='256x256' className='dark:bg-Dcardblack dark:text-white '>256 x 256</option>
                   <option value='512x512' className='dark:bg-Dcardblack dark:text-white '>512 x 512</option>
                   <option value='1024x1024' className='dark:bg-Dcardblack dark:text-white '>
                     1024 x 1024
                   </option>
                 </Field>
               </div>
              </Form>
            )}
          </Formik>
        </div>
        <section className='mt-10 max-w-3xl mx-auto w-4/5'>
          <h2 className='text-xl text-center'>
            Imagen generada:
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {imagenes?.map((imagen: imagesGenerated, index) => (
              <Fragment key={index}>
                <img src={imagen.url} alt='Imagen generada por dalle' className='rounded mt-4' />
              </Fragment>
            ))}
          </div>
        </section>
        <section className='mt-10 mx-auto'>
          <h2 className='text-center text-xl'>
            Tus imagenes generadas -{' '}
            <span className='bg-indigo-600 text-white dark:bg-pink-500 py-1 px-2 rounded text-sm'>
              Recuerda que solo duran una hora
            </span>
          </h2>

          <div className='sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 my-10 gap-x-3 px-10'>
            {imagenUsario.map(({ data }:DalleTypes) =>
              data.map((image: Datum, index) => (
                <Fragment key={index}>
                  {image.url && (
                    <img src={image.url} loading={'lazy'} className="w-full rounded mb-3 transition-transform cursor-pointer hover:scale-105"
                      onError={(e) => {
                        // e.currentTarget.src = "https://via.placeholder.com/150"
                        e.currentTarget.style.display =
                          'none';
                        e.cancelable = true;
                      }}
                    />
                  )}
                </Fragment>
              ))
            )}
          </div>
        </section>
      </div>
      <footer className='flex px-6 py-5 dark:bg-[#363636] bg-slate-100'>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <a href='https://twitter.com/Joshwawo' target="_blank" rel="noopener noreferrer">
                <BsTwitter className='dark:text-white text-[#242424] hover:text-pink-500 w-5 h-5 transition-colors' />
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub className="dark:text-white text-[#242424] hover:text-pink-500 w-5 h-5 transition-colors" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
