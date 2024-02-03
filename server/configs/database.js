const mongoose = require("mongoose");
const webConstants = require("../web-constants");

function initDatabase() {
  mongoose.set("strictQuery", true);
  return mongoose
    .connect(`${webConstants["MONGO-URI"]}`)
    .then(() =>
      console.log(`\x1b[32m→ You successfully connected to MongoDB! \x1b[0m`)
    );
}

module.exports = initDatabase;
