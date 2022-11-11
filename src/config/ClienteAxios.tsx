import axios from "axios";

const URL_PROD = `${import.meta.env.VITE_BACKEND_URL}`
const URL_DEV = `${import.meta.env.VITE_BACKEND_LOCAL}`
const clienteAxios = axios.create({
    // import.meta.env.VITE_BACKEND_LOCAL
    baseURL: `${URL_PROD}`
})

export default clienteAxios