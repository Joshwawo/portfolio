import {
  getVoicesList,
  postVoices,
} from "../../components/tts/services/TssServices";
import { responseVoices } from "../../interfaces/voicesTypes";
import { localDataLangs } from "../../components/tts/tssData";
import Alerta from "../../helpers/Alerta";
import { VoicesTypes } from "../../../../RailwayBackend/src/interfaces/voices";
import enVoices from '../../components/tts/enVoices.json'

import { useState, useEffect, Fragment } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Fuse from "fuse.js";
import * as yup from "yup";

const TTS = () => {
  const [ttsField, setTssFiled] = useState<string>(""); //?setteo el input
  const [voicesSelected, setVoicesSellected] = useState<string>("");
  //?Aqui empieza el setDeData
  const [resApi, setResApi] = useState<responseVoices[]>([]);

  //?Aqui para lo del headlessUi
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<VoicesTypes[]>([]);

  //fuse.js
  const [newQuery, setNewQuery] = useState<string>("");

  //validaciones
  const [alerta, setAlerta] = useState<object>({});

  const getVoicesListFn = async () => {
    const lang = "english";
    const mode = "tts-all";
    const response = await getVoicesList(lang, mode);
    // setResApi(response.data);
    const resul = response.data;
    setSelected(resul as any);
    // console.log(response.data);
  };

  // const voicesMap = localDataLangs.map((voices)=>{
  //   return {
  //     voices_uuid: voices.voicemodel_uuid,
  //     displayName: voices.display_name,
  //   }
  // })
  // const filteredVoices = query === "" ? voicesMap : voicesMap.filter((voices)=>{
  //   return voices.displayName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  // })

  const fuse = new Fuse(enVoices, {
    keys: ["display_name", "voicemodel_uuid", "name"],
    threshold: 0.3,
    includeScore: true,
    ignoreFieldNorm: true,
  });

  const results = fuse.search(newQuery);
  const voicesSek = results.map((result) => result.item);
  // console.log('results', results)

  const { message } = alerta as any;

  return (
    <>
      {message && <Alerta alerta={alerta} />}

      <Formik
        onSubmit={(values, actions) => {
          //prohibido cambiar a async y await
          // console.log(values);
          postVoices(values)
            .then((res) => {
              setResApi([...resApi, res]), actions.setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
              setAlerta({
                message: err.response.data.message,
                error: true,
              });
              setTimeout(() => {
                setAlerta({});
              }, 4000);
              actions.setSubmitting(false);
            });
        }}
        validationSchema={yup.object({
          ttsField: yup.string().required("the field is required").trim(),
          voicesSelected: yup.string().required("the field is required").trim(),
        })}
        initialValues={{ ttsField, voicesSelected }}
      >
        {({ handleSubmit, isSubmitting, setFieldValue, values, setValues }) => {
          // console.log('valuesFormik',values)
          const handleOnSearch = (e: any) => {
            e.preventDefault();
            // e.currentTarget.value === "" ? setNewQuery("") : setNewQuery(e.currentTarget.value)
            setNewQuery(e.currentTarget.value);

            // setNewQuery(value)
          };
          return (
            <>
              <Form onSubmit={handleSubmit}>
                <div className="container mx-auto mt-10">
                  <div>
                    <label
                      htmlFor="ttsField"
                      className="dark:text-pink-500 px-2 uppercase block"
                    >
                      Texto to speech
                    </label>
                    <Field
                      as="textarea"
                      type="text"
                      name="ttsField"
                      id="ttsField"
                      className="w-full"
                    />
                    <ErrorMessage
                      name="ttsField"
                      component="div"
                      className="text-red-500 text-sm mb-2"
                    />
                  </div>
                  {/* <div className="my-10">
                    <Combobox value={selected} 
                    onChange={
                     
                      (e) => {
                        console.log(e + "Desde onChange")
                        setSelected(e);
                        setFieldValue("voicesSelected",e)
                      }

                    }>
                      <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                          <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            as="input"
                            
                            onChange={(e) =>
                              setFieldValue("query", e.target.value)
                            }
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                        </div>
                        <Transition
                        
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={
                            () => {
                              console.log("despues de leave")
                            
                            }
                              
                          }
                        />
                        <Combobox.Options className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            {
                              filteredVoices.length  ===0 && query !== '' ?(
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                              </div>
                              ):(
                                filteredVoices.map(voices =>{
                                  return(
                                    <Combobox.Option
                                    key={voices.voices_uuid}
                                    value={voices.voices_uuid}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? "text-white bg-teal-600"
                                          : "text-gray-900"
                                      }
                                          cursor-default select-none relative py-2 pl-8 pr-4`
                                    }
                                    >
                                    {({ selected, active }) => (
                                      <>
                                        <span>
                                          {selected ? (
                                            <CheckIcon
                                              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                                              aria-hidden="true"
                                            />
                                          ) : null}
                                          {voices.displayName}
                                          
                                        </span>
                                      </>
                                    )}
                                      

                                    </Combobox.Option>
                                  )
                                })
                              )
                            }
                        </Combobox.Options>
                        
                      </div>
                    </Combobox>
                  </div> */}
                  <div className="my-10">
                    <Field name="voicesSelected" as="select" className="w-full">
                      {voicesSek.map((voices) => {
                        return (
                          <option
                            key={voices.voicemodel_uuid}
                            value={voices.name}
                          >
                            {voices.display_name}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="voicesSelected"
                      component="div"
                      className="text-red-500 text-sm mb-2"
                    />
                    
                    <Field
                      type="text"
                      name="newQuery"
                      onChange={handleOnSearch}
                    />
                  </div>
                </div>

                <div className="container mx-auto">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="dark:bg-pink-500 py-2 px-2 block"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
      {resApi &&
        resApi.map((voice, i) => {
          return (
            <div className="container mx-auto mt-10 ">
              <audio key={i} controls className="mx-auto mt-5">
                <source src={voice.path} />
              </audio>
              <p className=" text-Dcardwhite block mt-5">
                <span className="text-pink-500">transcription:</span>{" "}
                {voice.tss}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default TTS;
