import axios from "axios";
import { InterfacesProyectos as InProjects } from "../interfaces/proyectosInterface";
import { PostBlog } from "../interfaces/PostBlog";
import second from "..";

const PROD = `${import.meta.env.VITE_IP_PROD}`;
const LOCALDEV = `${import.meta.env.VITE_IP_LOCAL}`;
const NEXTURL = `${import.meta.env.VITE_NEXT_BACKEND}`



const fetchAllBlogs = async () => {
  // const ipLocal = import.meta.env.VITE_IP_LOCAL;
  // const ipProd = import.meta.env.VITE_IP;
  const response = await axios.get<InProjects[]>(`${NEXTURL}/api/blogs`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
  return response
};

const createEmail = async (data: any) => {
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

  return await axios.post(`${PROD}/projects/posts`, form, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
};

export { fetchAllBlogs, createBlogFetch, createEmail };
// export default Blogs;
