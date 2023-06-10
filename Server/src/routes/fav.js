const express = require("express");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const favRouter = express.Router();

favRouter.post("/", postFav);
favRouter.delete("/:id", deleteFav);

module.exports = favRouter;
