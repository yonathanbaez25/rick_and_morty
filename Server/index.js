const app = require("./src/app");
const { conn } = require("./src/DB_connection");

const PORT = 3001;

app.listen(PORT, async () => {
  await conn.sync({ force: true }),
    console.log(`Server listening on http://localhost:${PORT}`);
});
