import React, { useState } from "react";
import "./App.css";
import { Users } from "./User.js";
import Table from "./Table.jsx";
const App = () => {
  const [query, setQueary] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];

  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().toUpperCase();.includes(query))
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search...."
        className="search"
        onChange={(e) => setQueary(e.target.value)}
      ></input>

      <Table data={Search(Users)} />
    </div>
  );
};

export default App;
