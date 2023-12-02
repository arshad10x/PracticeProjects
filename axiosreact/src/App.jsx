import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  // 1. using promises  & error handling
  // const fetchData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error.message));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  // 2. using Async Await
  // const getApiData=async()=>{
  //   try {
  //     const res = await axios.get("https://sonplaceholder.typicode.com/posts")
  //     setData(res.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  //   useEffect(()=>{
  //     getApiData();
  //   })

  return (
    <>
      <h1>Axios React</h1>
      {error != "" && <h2>{error}</h2>}
      <div className="container">
        {data.slice(0,12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
