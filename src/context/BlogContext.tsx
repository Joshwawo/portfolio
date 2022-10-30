import {
  createContext,
  ProviderProps,
  useContext,
  useState,
  useEffect,
} from "react";
import { InterfacesProyectos } from "../interfaces/proyectosInterface";
import { fetchAllBlogs, createBlogFetch } from "../api/BlogsApi";


const postContext = createContext<any>(null);

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }: ProviderProps<unknown>) => {
  const [posts, setPosts] = useState<InterfacesProyectos[]>([]);

  const getAllBlogs = async () => {
    const { data } = await fetchAllBlogs();
    // console.log(data);
    setPosts(data);
  };

  const createBlog = async (post: any) => {
    try {
      const respuesta = await createBlogFetch(post);
      setPosts([...posts, respuesta.data]);
      // console.log(respuesta)
    } catch (error) {
      console.log(error);
    }
  };

  //TODO: descomentar esto

  useEffect(() => {
  getAllBlogs()
  }, []);

  return (
    <postContext.Provider value={{ posts, setPosts, createBlog }}>
      {children}
    </postContext.Provider>
  );
};

// export default BlogProvider;
