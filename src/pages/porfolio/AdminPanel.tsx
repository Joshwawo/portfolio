import Formulario from "../../components/forms/Formulario";
import { usePost } from "../../context/BlogContext";
const AdminPanel = () => {
  const { posts } = usePost();
//   console.log(posts);
  return (
    <div className="">
      <p>Hola desde el admin panel</p>
      <br />
      <div className=" ">
        <Formulario />
      </div>
    </div>
  );
};

export default AdminPanel;
