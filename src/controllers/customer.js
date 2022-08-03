const client = require("../database/connection");
const Query = require("../constants/query/Query");
//models
const Customer = require("./models/Customer");

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

const login = (req, res) => {
  const user = new Customer.User(req.body.username, req.body.password);
  client.query(
    Query.selectCusUP,
    [user.userName, user.password],
    (err, result) => {
      if (err) res.send(err.message);
      else res.send(result);
      console.log(
        "<<<===request===>>>\nnusername:" +
          user.userName +
          "\npassword:" +
          user.password +
          "\n<<<===response===>>>\n" +
          result
      );
    }
  );
};

const regist = (req, res) => {
  const customer = new Customer.Customer(
    req.body.custoner_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.gender,
    req.body.user_name,
    req.body.password
  );
  client.query(
    Query.addCustomer,
    [
      customer.firstName,
      customer.lastName,
      customer.birthDate,
      customer.gender,
      customer.userName,
      customer.password,
    ],
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("inserted customer!");
    }
  );
};

const cusQueryList = { customer, numbers, mails, login, regist };

module.exports = cusQueryList;
