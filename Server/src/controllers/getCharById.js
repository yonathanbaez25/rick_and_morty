const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharacterById = (req, res) => {
  const { id } = req.params;

  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharacterById;
