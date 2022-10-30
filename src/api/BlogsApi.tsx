import axios from "axios";
import { InterfacesProyectos as InProjects } from "../interfaces/proyectosInterface";
import { PostBlog } from "../interfaces/PostBlog";


const fetchAllBlogs = async () => {
  return await axios.get<InProjects[]>(import.meta.env.VITE_IP,{
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    }
  });
};

const createBlogFetch = async (post: any) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post(import.meta.env.VITE_IP, form, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${import.meta.env.VITE_JWT_FRONTEND}`,
    },
  });
};

export { fetchAllBlogs,createBlogFetch };
// export default Blogs;
