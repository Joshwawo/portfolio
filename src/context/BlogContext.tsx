import {
  createContext,
  ProviderProps,
  useContext,
  useState,
  useEffect,
} from "react";
import { InterfacesProyectos } from "../interfaces/proyectosInterface";
import { fetchAllBlogs, createBlogFetch } from "../api/BlogsApi";

type BlogContextType = {
  posts: InterfacesProyectos[];
  setPosts: React.Dispatch<React.SetStateAction<InterfacesProyectos[]>>;
  createBlog: any;
  loading: boolean;

}

const postContext = createContext<BlogContextType>( {} as BlogContextType);

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }: ProviderProps<unknown>) => {
  const [posts, setPosts] = useState<InterfacesProyectos[]>([] as InterfacesProyectos[]);
  const [loading, setLoading] = useState<boolean>(false);
  

  const getAllBlogs = async () => {
    setLoading(true)
    try {
      const { data } = await fetchAllBlogs();
      // console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
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
    <postContext.Provider value={{ posts, setPosts, createBlog, loading}}>
      {children}
    </postContext.Provider>
  );
};

// export default BlogProvider;
