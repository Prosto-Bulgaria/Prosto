const { MongoClient, ServerApiVersion } = require("mongodb");
const webConstants = require("../web-constants");

const client = new MongoClient(webConstants["MONGO-URI"], {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function initDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      `\x1b[32m→ Pinged your deployment. You successfully connected to MongoDB! \x1b[0m`
    );
  } finally {
    await client.close();
  }
}

module.exports = initDatabase;
