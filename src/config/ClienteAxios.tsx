import axios from "axios";

const URL_PROD = `${import.meta.env.VITE_BACKEND_URL}`
const URL_DEV = `${import.meta.env.VITE_BACKEND_LOCAL}`
const clienteAxios = axios.create({
    // import.meta.env.VITE_BACKEND_LOCAL
    // baseURL: `${import.meta.env.MODE === 'development' ? URL_DEV : URL_PROD}`
    baseURL: `${import.meta.env.VITE_BACKEND_LOCAL}`
})

export default clienteAxios