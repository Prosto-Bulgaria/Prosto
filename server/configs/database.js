const mongoose = require("mongoose");
require('dotenv').config();


function initDatabase() {
  mongoose.set("strictQuery", true);
  return mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() =>
      console.log(`\x1b[32m→ You successfully connected to MongoDB! \x1b[0m`)
    );
}

module.exports = initDatabase;
