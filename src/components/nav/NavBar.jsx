import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={style.container}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
