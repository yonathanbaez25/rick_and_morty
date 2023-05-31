const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url.split("/");
    let param1 = url[1];
    let param2 = url[2];
    let id = url[3];
    console.log(url);

    if (param1 === "rickandmorty" && param2 === "characters") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(characters));
    }

    if (param1 === "rickandmorty" && param2 === "character") {
      let character = characters.find((ch) => {
        return ch.id === Number(id);
      });
      if (character)
        return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
    }

    return res
      .writeHead(404, { "Content-Type": "text/plain" })
      .end("Not found");
  })
  .listen(PORT, () => {
    console.log("in port http://localhost:3001");
  });
