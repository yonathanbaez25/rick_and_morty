import React from "react";
import Card from "../card/Card";
import { Connect, connect } from "react-redux";

function Favorites({ myFavorites, onClose }) {
  return (
    <div>
      <h1>Favorites</h1>
      {myFavorites.map((characters) => (
        <Card
          key={characters.id}
          id={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          origin={characters.origin?.name}
          image={characters.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

function mapState(st) {
  return {
    myFavorites: st.myFavorites,
  };
}

export default connect(mapState)(Favorites);
