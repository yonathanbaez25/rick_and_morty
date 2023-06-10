const express = require("express");
const getLogin = require("../controllers/getLogin");
const loginRouter = express.Router();

loginRouter.get("/", getLogin);

module.exports = loginRouter;
