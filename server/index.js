const express = require("express");
const app = express();
const { authMiddleware } = require("./middlewares/auth");
const cors = require('cors')
const router = require("./routes");
const initDatabase = require("./configs/database");
const webConstants = require('./web-constants')


app.use(cors({credentials: true, origin: '*', allowHeaders: ['Content-Type, X-Authorization']}))
app.use(express.json());
app.use(authMiddleware);
app.use(router)

app.listen(webConstants.PORT, async() => {
    console.log(`\x1b[33m→ Connecting to Database...\x1b[0m`)
    initDatabase().catch(console.dir);
    console.log(`\x1b[32mProsto API listening on port ${webConstants.PORT}\x1b[0m`);
})
