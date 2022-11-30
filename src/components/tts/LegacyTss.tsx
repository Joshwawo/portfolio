import {
    VoicesTypes,
    datos,
    responseVoices,
  } from "../../interfaces/voicesTypes";
  import clienteAxios from "../../config/ClienteAxios";
  import { localDataLangs } from "../../components/tts/tssData";
  
  import { useState, useEffect, Fragment } from "react";
  import { Ring } from "@uiball/loaders";
  import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
  import { Combobox } from "@headlessui/react";
  //!ESTE CODIGO YA NO SIRVE
  const TTS = () => {
    const [langToSelect, setLangToSelect] = useState<VoicesTypes[]>([]);
    const [resVoices, setResVoices] = useState<responseVoices[]>([]);
    const [voicesSelected, setVoicesSelected] = useState<string>("");
    const [texToSpeech, setTexToSpeech] = useState<string>("");
    const [pace, setPace] = useState<number>(0);
    const [pitch, setPitch] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    //Pruebas
    const [query, setQuery] = useState<string>("");
    const [selectedVoices, setSelectedVoices] = useState(
      localDataLangs[0].voicemodel_uuid
    );
  
    const getVoicesList = async (language: string, mode: string) => {
      const response = await clienteAxios.get<VoicesTypes[]>(`/voices/voices`, {
        params: { language, mode },
      });
      setLangToSelect(response.data);
    };
    const postVoices = async (datos: datos) => {
      // console.log(datos);
      const response = await clienteAxios.post("/voices/tss", {
        tts: datos.texToSpeech,
        // voice:datos.voicesSelected,
        pace: datos.pace,
        pitch: datos.pitch,
        duration: datos.duration,
        voicemodel_uuid: datos.voicesSelected,
      });
      setResVoices([...resVoices, response.data]);
    };
    const mapVoices = localDataLangs.map((voices) => {
      return {
        voices_uuid: voices.voicemodel_uuid,
        displayName: voices.display_name,
      };
    });
    // console.log(mapVoices);
    const filteredVoices =
      query === ""
        ? mapVoices
        : mapVoices.filter((voices) => {
            return voices.displayName
              .toLocaleLowerCase()
              .includes(query.toLowerCase());
          });
    // console.log(filteredVoices);
  
    useEffect(() => {
      const lang = "english";
      const mode = "tts-all";
      return () => getVoicesList(lang, mode) as any;
    }, []);
  
    return (
      <section className="container-root">
        <span className="text-white">Desde tss</span>
        <div className="container mx-auto   mt-10 bg-[#FFFFFFDE]">
          <Formik
            onSubmit={(values, actios) => {
              console.log(values);
              // postVoices(values).then(() => {
              //   actios.setSubmitting(false);
              // });
            }}
            initialValues={{ texToSpeech, voicesSelected, }}
          >
            {({ handleSubmit, isSubmitting }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="w-full bg-orange-300">
                    <br />
                    <label htmlFor="" className="block">
                      Say anything
                    </label>
                    <Field type="text" name="texToSpeech" />
                  </div>
                  <br />
                  {langToSelect && (
                    <Field as="select" name="voicesSelected">
                      <option
                        value=""
                        selected={true}
                        disabled={true}
                        hidden={true}
                      >
                        Select voices
                      </option>
                      {langToSelect?.map((voices) => (
                        <option
                          key={voices?.voicemodel_uuid}
                          value={voices?.voicemodel_uuid}
                        >
                          {voices?.display_name}
                        </option>
                      ))}
                    </Field>
                  )}
                  <br />
  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-2 bg-blue-400 rounded-md my-10"
                  >
                    {isSubmitting ? <Ring color="black" size={20} /> : "Send"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
  
        <div className="bg-green-300">
          <label htmlFor="browser">Choose your browser from the list:</label>
          <input list="browsers" name="browser" id="browser" />
          <datalist id="browsers">
            <option value="Edge" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
        </div>
  
        {resVoices &&
          resVoices.map((voice, i) => {
            return (
              <div className="container  ">
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
        <br />
      </section>
    );
  };
  
  export default TTS;
  