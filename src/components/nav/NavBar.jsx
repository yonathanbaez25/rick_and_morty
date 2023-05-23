import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={style.container}>
      <NavLink to="/About">
        <button>About</button>
      </NavLink>
      <NavLink to="/Home">
        <button>Home</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
