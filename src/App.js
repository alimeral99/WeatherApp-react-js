import React, { useState } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import axios from "axios";
import Weather from "./Components/Weather";
import Loading from "./Components/Loading";
const API__key = "a19d5391be9e0245f76f7d4f68a8c854";

function App() {
  const [data, setData] = useState([]);

  const fecthData = async (data) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API__key}`
      );

      setData(response.data);
    } catch (error) {
      return alert(error);
    }
  };

  return (
    <div className="app">
      <SearchBox fecthData={fecthData} />
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
