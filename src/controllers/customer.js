const client = require("../database/connection");
const Query = require("../constants/query/Query");

const customer = (req, res) => {
  client.query(Query.selectCustomer, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const mails = (req, res) => {
  client.query(Query.selectCusMail, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const numbers = (req, res) => {
  client.query(Query.selectCusNum, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const cusQueryList = { customer, numbers, mails };

module.exports = cusQueryList;
