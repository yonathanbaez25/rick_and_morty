const axios = require("axios");

function getCharacterById(req, res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((value) => value.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin, // Paso el objeto entero !!!
        image: data.image,
        status: data.status,
      };

      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" }).end(error);
    });
}
module.exports = getCharacterById;
