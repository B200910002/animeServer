const client = require("../database/connection");
const Query = require("../constants/query/Query");

const viewservice = (req, res) => {
  client.query(Query.selectViewService, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const viewservice1 = (req, res) => {
  client.query(Query.selectViewService, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

module.exports = { viewservice, viewservice1 };
