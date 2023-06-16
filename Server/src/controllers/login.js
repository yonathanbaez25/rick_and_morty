const User = require("../DB_connection");

const login = (req, res) => {
  const { email, password } = req.query;
  if (!email || email.length === 0) {
    return res.status(404).send("Faltan datos");
  }
  if (!password || password.length === 0) {
    return res.status(404).send("Faltan datos");
  }
  try {
  } catch (error) {}
};

module.exports = login;
