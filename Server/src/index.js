const http = require("http");
const getCharacterById = require("./controllers/character");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      let id = req.url.split("/").pop(); // string
      return getCharacterById(req, res, id);
    }
  })
  .listen(PORT, "localhost");
