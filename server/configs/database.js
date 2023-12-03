const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://first-user:XCkX17knzjHec3Nf@prostocluster.wrilkzi.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
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
