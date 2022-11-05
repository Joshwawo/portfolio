import axios from "axios";

const clienteAxios = axios.create({
    //import.meta.env.VITE_BACKEND_LOCAL
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export default clienteAxios