const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgresql",
  database: "bie_daalt_2",
});
client.connect();

class Connection {
  constructor() {}
}

module.exports = client;
