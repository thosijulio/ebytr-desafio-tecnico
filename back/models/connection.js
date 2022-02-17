const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL, DB_NAME } = process.env;

let db = null;

const connection = () => {
  return db
  ? db
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
};

module.exports = connection;
