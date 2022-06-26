import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/home").then(function (response) {
      setHome(response.data);
    });
  }, []);

  async function postName(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/post_name", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <form onSubmit={postName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send Name</button>
      </form>
      {home}
    </div>
  );
}

export default App;
