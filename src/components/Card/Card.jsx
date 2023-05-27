import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={style.container} key={props.id}>
      <div className={style.favContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={style.buttonContainer}>
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="" />
        <div className={style.dataContainer}>
          <h2>{props.name}</h2>
          <h4>{props.status}</h4>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
          <h4>{props.origin}</h4>
        </div>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
