const users = require("../utils/users");

const getLogin = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  const userVerification = users.forEach((element) => {
    element.email === email && element.password === password
      ? (access = true)
      : null;
  });
  return res.status(200).json({ access });
};

module.exports = getLogin;
