const express = require("express");
const app = express();
const { authMiddleware } = require("./middlewares/auth");
const cors = require('cors');
const router = require("./routes");
const initDatabase = require("./configs/database");
require('dotenv').config();

app.use(cors({credentials: true, origin: '*', allowHeaders: ['Content-Type, X-Authorization']}));
app.use(express.json());
app.use(authMiddleware);
app.use(router)

initDatabase()
.then(() => {
    app.listen(process.env.PORT, () => console.log(`\x1b[32m→ Prosto API listening on port ${process.env.PORT}\x1b[0m`))
})
.catch((err) => console.log(err));