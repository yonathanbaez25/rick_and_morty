import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/nav/NavBar";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = "yacevedo170@gmail.com";
  const PASSWORD = "123456";

  const navigate = useNavigate();

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}

      <hr />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
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
