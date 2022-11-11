import { useState, Fragment } from "react";
import axios from "axios";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikHelpers,
  validateYupSchema,
} from "formik";
import * as Yup from "yup";
import {Ring} from '@uiball/loaders'
import {SearchEngineTypes} from '../../interfaces/SearchEngineTypes'

const SeUpImg = () => {
  const [imgUpload, setImgUpload] = useState<SearchEngineTypes[]>([]);
  let PROD = `${import.meta.env.VITE_BACKEND_URL}`;
  const uploadImageFunc = async (datos: any) => {
    try {
      const formData = new FormData();
      // formData.append("image", datos.image);
      for (let key in datos) {
        formData.append(key, datos[key]);
      }

      const response = await axios.post(
        `${PROD}/lexica/search`,
        formData
      );
      // console.log(response.data.images);
      setImgUpload(response.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dark:text-Dcardwhite text-Dcardblack font-bold container-root">
      <h1 className="mb-10">Upload an image for reverse image search. <span className="dark:text-pink-500 text-xs">this page is currently wip</span></h1>

      <Formik
        initialValues={{ imgUpload: "" }}
        validationSchema={Yup.object({
          imgUpload: Yup.mixed().required("Image is Required"),
        })}
        onSubmit={(values, actions) => {
          uploadImageFunc(values).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          });
          // console.log(values);
        }}
      >
        {({ handleSubmit, isSubmitting, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit} className="">
              <div className="flex items-center space-x-6">
                <label htmlFor="imgUpload" className="block mb-3 mx-auto">
                  <input
                    type="file"
                    name="imgUpload"
                    placeholder="Upload an image"
                    id="imgUpload"
                    className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  dark:file:bg-pink-200 dark:file:text-pink-700
                
                  hover:file:bg-violet-10"
                    onChange={(event) =>
                      setFieldValue("imgUpload", event.target.files?.[0])
                    }
                  />
                </label>
              </div>

              <div className="">
                <ErrorMessage
                  component={"div"}
                  className=" text-red-300 text-sm"
                  name="imgUpload"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block mt-4 dark:bg-pink-500 rounded px-4 py-1 mx-auto "
                >
                  {isSubmitting ? <Ring size={20} color="white" /> : <span className="text-Dcardblack dark:text-Tcardwhite">Search</span>}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <div className="columns-5  mt-10">
        {imgUpload && (
          imgUpload.map((img)=>(
            <Fragment key={img.id}>
              <img src={img.src} alt="" className="py-1"/>
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default SeUpImg;
