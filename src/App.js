import { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nav/NavBar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch(function (error) {
        // handle error
        window.alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((caracter) => caracter.id !== Number(id)));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <NavBar onSearch={onSearch} />
      <hr />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
