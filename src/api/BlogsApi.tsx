import axios from "axios";
import { InterfacesProyectos as InProjects } from "../interfaces/proyectosInterface";
import { PostBlog } from "../interfaces/PostBlog";

const PROD = `${import.meta.env.VITE_IP_PROD}`;
const fetchAllBlogs = async () => {
  // const ipLocal = import.meta.env.VITE_IP_LOCAL;
  // const ipProd = import.meta.env.VITE_IP;
  return await axios.get<InProjects[]>(`${PROD}/projects/posts`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
};

const createEmail = async (data: any) => {
  const urlLH = `${import.meta.env.VITE_IP_PROD}/emails`;

  return await axios.post(`${PROD}/emails`, data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
};

const createBlogFetch = async (post: any) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(`${import.meta.env.VITE_IP_PROD}/projects/posts`, form, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
};

export { fetchAllBlogs, createBlogFetch, createEmail };
// export default Blogs;
