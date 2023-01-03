import React, { useState } from "react";
import "./SearchBox.css";

function SearchBox({ fecthData }) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (input) {
      fecthData(input);
      setInput("");
    } else {
      alert("you need to enter city");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h2>Weather App</h2>
        <form className="search__box" onSubmit={onSearchSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="please enter city"
          />
          <button>Search</button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBox;
