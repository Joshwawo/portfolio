import React from "react";
import Fuses from "fuse.js";

const Fuse: any = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const options: any = {
    keys: ["name", "email", "phone", "address", "company"],
    threshold: 0.3,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    shouldSort: true,
    useExtendedSearch: true,
    ignoreLocation: true,
    findAllMatches: true,
    includeMatches: true,
    includeScore: true,
  };

//   const list = ["Old Man's War", "The Lock Artist"]

  const fuse = new Fuses(data, options)

  

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    const result = fuse.search(e.target.value);
    setResults(result as any);
  };

  React.useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen container mx-auto">
        <p className="text-pink-400">Buscar</p>
      <input type="text" value={search} onChange={handleSearch} />
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          results.map((result: any) => (
            <li key={result.item.id}>
              <h3>{result.item.name}</h3>
              <p>{result.item.email}</p>
              <p>{result.item.phone}</p>
              <p>{result.item.address}</p>
              <p>{result.item.company}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Fuse;
