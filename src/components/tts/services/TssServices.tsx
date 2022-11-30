import clienteAxios from "../../../config/ClienteAxios";
import { VoicesTypes,datos } from "../../../interfaces/voicesTypes";

export const getVoicesList = async (language: string, mode: string) => {
    const response = await clienteAxios.get<VoicesTypes[]>(`/voices/voices`, {
      params: { language, mode },
    });

    return response
    
  };
 export const postVoices = async (datos: datos) => {
    // console.log('values datos',datos);
    const response = await clienteAxios.post("/voices/tss", {
      tts: datos.ttsField,
      voice:datos.voicesSelected,
      // pace: datos.pace,
      // pitch: datos.pitch,
      // duration: datos.duration,
      // voicemodel_uuid: datos.voicesSelected,
    });
    // console.log(response.data)
    return response.data
    // setResVoices([...resVoices, response.data]);
  };

// function setLangToSelect(data: VoicesTypes[]) {
//     throw new Error("Function not implemented.");
// }
