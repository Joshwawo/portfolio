import axios from "axios";
import { useState, useEffect } from "react";
import { SearchEngineTypes } from "../interfaces/SearchEngineTypes";

const Lexica = () => {
  const [lexica, setLexica] = useState<SearchEngineTypes[]>([]);

  const getLexica = async () => {
    try {
      const res = await axios.get<SearchEngineTypes[]>(
        "http://localhost:3003/lexica/prompt"
      );
      console.log(res.data);
      setLexica(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => getLexica() as any;
  }, []);

  return (
    <div className="h-screen ">
      <p className="dark:text-white">Lexica </p>
    </div>
  );
};

export default Lexica;
