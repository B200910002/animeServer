const client = require("../database/connection");
const Query = require("../constants/query/Query");
//models
const Customer = require("./models/Customer");
const Email = require("./models/Email");
const Number = require("./models/Number");

const customer = (req, res) => {
  client.query(Query.selectCustomer, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addCustomer = (req, res) => {
  const customer = new Customer(
    req.body.cus_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.gender,
    req.body.user_name,
    req.body.password
  );
  client.query(Query.addCustomer, customer.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted customer!");
    console.log(customer.getWithId());
  });
};

const updateCustomer = (req, res) => {
  const customer = new Customer(
    req.body.cus_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.gender,
    req.body.user_name,
    req.body.password
  );
  client.query(Query.updateCustomer, customer.getWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated customer!");
    console.log(customer.getWithId());
  });
};

const delelteCustomer = (req, res) => {
  const { cus_id } = req.params;
  client.query(Query.deleteCustomer, [cus_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted customer!");
  });
};

const emails = (req, res) => {
  client.query(Query.selectCusMail, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addEmail = (req, res) => {
  const email = new Email(req.body.cus_id, req.body.email);
  client.query(Query.addCusMail, email.get(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted email for " + email.ownerId);
  });
};

const updateEmail = (req, res) => {
  const email = new Email(req.body.cus_id, req.body.email);
  email.changeEmail(req.body.new_email);
  client.query(Query.updateCusMail, email.getWithChanged(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated email!");
  });
};

const deleteEmail = (req, res) => {
  const { cus_id, email } = req.params;
  client.query(Query.deleteCusMail, [cus_id, email], (err, result) => {
    if (err) res.send(err.message);
    else res.send("delete mail!:" + email);
  });
};

const numbers = (req, res) => {
  client.query(Query.selectCusNum, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addNumber = (req, res) => {
  const number = new Number(req.body.cus_id, req.body.number);
  client.query(Query.addCusNum, number.get(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("add number" + number.number);
  });
};

const updateNumber = (req, res) => {
  const number = new Number(req.body.cus_id, req.body.number);
  number.changeNumber(req.body.new_number);
  client.query(Query.updateCudNum, number.getWithChange(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated number");
  });
};

const deleteNumber = (req, res) => {
  const { cus_id, number } = req.params;
  client.query(Query.deleteCusNum, [cus_id, number], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted number" + number);
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
  const customer = new Customer(
    req.body.custoner_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.gender,
    req.body.user_name,
    req.body.password
  );
  client.query(Query.addCustomer, customer.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted customer!");
  });
};

module.exports = {
  addNumber,
  updateNumber,
  deleteNumber,
  deleteEmail,
  updateEmail,
  customer,
  numbers,
  emails,
  login,
  regist,
  addCustomer,
  updateCustomer,
  delelteCustomer,
  addEmail,
};
