const client = require("../database/connection");
const Query = require("../constants/query/Query");
const Query2 = require("../constants/query/Query2");

// models
const Translator = require("./models/Translator");
const Number = require("./models/Number");

const translator = (req, res) => {
  const translator = new Translator();
  client.query(Query2.selectTrans, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addTranslator = (req, res) => {
  const translator = new Translator(
    req.body.translator_id,
    req.body.first_name,
    req.body.last_name,
    req.body.regist,
    req.body.birth_date,
    req.body.ranke,
    req.body.email,
    req.body.user_name,
    req.body.password
  );

  client.query(Query.registTrans, translator.getWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted translator!");
    console.log(translator.getWithoutId());
  });
};

const updateTranslator = (req, res) => {
  const translator = new Translator(
    req.body.translator_id,
    req.body.first_name,
    req.body.last_name,
    req.body.regist,
    req.body.birth_date,
    req.body.ranke,
    req.body.email,
    req.body.user_name,
    req.body.password
  );
  client.query(Query.updateTrans, translator.getWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated translator!");
  });
};

const deleteTranslator = (req, res) => {
  const { tra_id } = req.params;
  client.query(Query.deleteTrans, [tra_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted translator!");
  });
};

const number = (req, res) => {
  new Number();
  client.query(Query.selectTraNumbers, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addNumber = (req, res) => {
  client.query(
    Query.addTraNumber,
    new Number(req.body.owner_id, req.body.number).getWithId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("inserted number!");
      console.log(new Number(req.body.owner_id, req.body.number).getWithId());
    }
  );
};

const updateNumber = (req, res) => {
  client.query(
    Query.updateTraNumber,
    new Number(req.body.owner_id, req.body.number).getWithId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("updated number!");
    }
  );
};

const deleteNumber = (req, res) => {
  const { owner_id } = req.params;
  client.query(Query.deleteTraNumber, [owner_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted number: " + owner_id);
  });
};

const list = {
  translator,
  addTranslator,
  updateTranslator,
  deleteTranslator,
  number,
  addNumber,
  updateNumber,
  deleteNumber,
};

module.exports = list;
