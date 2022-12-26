import axios from "axios";
import { useEffect, useState } from "react";

interface BlogData {
  image: Image;
  _id: string;
  title: string;
  descripcion: string;
  tech: string;
  github: string;
  proyectUrl: string;
  createdAt: Date | string | undefined;
  updatedAt: Date | string | undefined;
}

interface Image {
  url: string;
  public_id: string;
}

const Testing = () => {
  const [data, setData] = useState<BlogData[]>([]);
  const [inputText, setInputText] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [error, setError] = useState(false);

  const fetchData = async () => {

    if([inputText, firstDate, lastDate].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);


      return;
    }

    let url = `http://localhost:3003/testing/name?name=${inputText}&fecha1=${firstDate.replace(
      "-",
      ","
    )}&fecha2=${lastDate.replace("-", ",")}`;
    const respuesta = await axios.get<BlogData[]>(url);
    setData(respuesta.data);
    // console.log(respuesta.data);
  };

  // useEffect(()=>{
  //   fetchData()
  // },[])

  const handleClick = () => {
    fetchData();

    console.log("Hola");
  };

  // console.log(data);

  return (
    <div>
      <div className="ruth">
        <div className="block">
          <label htmlFor="">Search by title</label>
          <input type="text" onChange={(e) => setInputText(e.target.value)} />
        </div>
        <div className="block">
          <label htmlFor="">Pick the first date</label>
          <input type="date" onChange={(e) => setFirstDate(e.target.value)} />
        </div>
        <div className="block">
          <label htmlFor="">Pick the second date</label>
          <input type="date" onChange={(e) => setLastDate(e.target.value)} />
        </div>

        <button
          onClick={handleClick}
          className="bg-blue-300 rounded-md py-2 px-2 "
        >
          Enviar
        </button>
      </div>
      <hr />

      {error && <p className="text-red-500 text-center">Please fill all the fields</p>}
      <div className="flex flex-col space-y-2 items-center">
        {data.map((item) => (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.descripcion}</p>
            <p>{item.tech}</p>
            <p>{item.github}</p>
            <p>{item.proyectUrl}</p>
            <p>{item.createdAt as string}</p>
            <p>{item.updatedAt as string}</p>
            <br />
          </div>
        ))}
      </div>

      {/* <div className="ruth">
        {data?.map((blog) => (
          <div key={blog._id} className="block" >
           
          </div>
        ))}


    </div> */}
    </div>
  );
};

export default Testing;
