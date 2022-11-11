import { useState } from "react";
import { SearchEngineTypes } from "../../interfaces/SearchEngineTypes";
import axios from "axios";
import SearchEngineCard from "./SearchEngineCard";
const SearchEngine = () => {
  const [searchTerm, setSearchTerm] = useState({
    prompt: "",
    nsfw: false,
    grid: false,
    limit: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<SearchEngineTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(searchTerm);

    const { prompt, nsfw, grid, limit } = searchTerm;

    if ([searchTerm.prompt, searchTerm.limit].includes("")) {
      setError(true);
      return;
    }

    setLoading(true);
    const lh = `http://localhost:3003`;
    const prod = `https://api-projects-production.up.railway.app`;
    const url = `${prod}/lexica/search?prompt=${prompt}&width=512&height=51&grid=${grid}&nsfw=${nsfw}&limit=${limit}&guidance=40`;
    // const url = `https://api-projects-production.up.railway.app/lexica/search?prompt=water&width=512&height=1&grid=${true}&nsfw=${true}&limit=${limit}&guidance=`

    const response = await axios.get<SearchEngineTypes[]>(url);
    // console.log(`La respuesta de la api es de: ${response.data.length}`);
    // console.log(response.data);
    setData(response.data);
    setLoading(false);
  };

  return (
    <>
      <style jsx={String(true)}>
        {`
          .rootContainer {
            max-width: 1380px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
          }
        `}
      </style>
      <div className="my-20 rootContainer">
        <h1 className="font-bold text-4xl mb-12 dark:text-Tcardwhite">
          Search across thousands of AI generated images{" "}
        </h1>
        {error && (
          <p className="text-lg text-red-600">You must enter a Search Term</p>
        )}
        {/* {loading && <p>Cargando ...</p>} */}

        <form onSubmit={handlerSubmit} className="">
          <div className="">
            <input
              value={searchTerm.prompt}
              onChange={(e) =>
                setSearchTerm({ ...searchTerm, prompt: e.target.value })
              }
              type="text"
              className="bg-slate-100 border border-slate-300 p-2 w-96 mr-2 rounded outline-none "
            />
            <button
              type="submit"
              className={`${
                loading === true
                  ? "bg-black/60 text-white py-2 px-3 rounded"
                  : "bg-black text-white py-2 px-7 rounded"
              }`}
              disabled={loading}
            >
              {loading === true ? "Searching..." : "Search"}
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <div>
              <label className="mr-2 dark:text-Tcardwhite" htmlFor="">
                allow nsfw
              </label>
              <input
                type="checkbox"
                value="true"
                name="nsfw"
                // checked={searchTerm.nsfw }
                defaultChecked={searchTerm.nsfw}
                onChange={(e) =>
                  setSearchTerm({
                    ...searchTerm,
                    nsfw: e.target.checked,
                  })
                }
              />
            </div>
            <div>
              <label className="mr-2 dark:text-Tcardwhite" htmlFor="">
                allow grid
              </label>
              <input
                type="checkbox"
                value="true"
                name="grid"
                // checked={searchTerm.nsfw }
                defaultChecked={searchTerm.grid}
                onChange={(e) =>
                  setSearchTerm({
                    ...searchTerm,
                    grid: e.target.checked,
                  })
                }
              />
            </div>
            <select
              name=""
              id=""
              className="dark:text-Tcardwhite dark:bg-Dcardblack"
              onChange={(e) =>
                setSearchTerm({ ...searchTerm, limit: e.target.value })
              }
            >
              <option value="">See</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </form>
      </div>
      {data.length >= 1 ? (
        <SearchEngineCard data={data}  />
      ) : (
        <p className="text-lg text-center font-bold dark:text-Tcardwhite">Start Looking for :)</p>
      )}
    </>
  );
};

export default SearchEngine;
