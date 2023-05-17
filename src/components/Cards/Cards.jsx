import Card from "../Card/Card.jsx";

export default function Cards({ characters }) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-evenly",
  };
  //console.log(characters);
  return (
    <div style={cardsContainer}>
      {characters.map((characters) => (
        <Card
          key={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          origin={characters.origin?.name}
          image={characters.image}
        />
      ))}
    </div>
  );
}
