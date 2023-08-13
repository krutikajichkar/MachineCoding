import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let offset = 0;
  const [displaydata, setDisplaydata] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true)
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + offset)
      .then((data) => data.json())
      .then((response) => {
        setDisplaydata((oldData) => [...oldData, ...response.results]);
        setLoading(false);
      });
    offset += 10;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target?.documentElement.scrollTop ===
      e.target?.documentElement.scrollHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       
        {displaydata.map((data, index) => {
          return (
            <div
              style={{
                width: "200px",
                boxShadow: "0px 1px 2px 3px grey",
                padding: "16px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              key={index}
            >
              <p>
                {index + 1}. {data.name}
              </p>
            </div>
          );
        })}
         {loading && <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
