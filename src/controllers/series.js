const client = require("../database/connection");
const Query = require("../constants/query/Query");

//authors
const authors = (req, res) => {
  client.query(Query.selectAuthors, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addAuthor = (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birth_date = req.body.birth_date;
  const birth_country = req.body.birth_country;

  client.query(
    Query.addAuthor,
    [first_name, last_name, birth_date, birth_country],
    (err, result) => {
      console.log(first_name, last_name, birth_date, birth_country);
      if (err) res.send(err.message);
      else res.send("inserted author!");
    }
  );
};

const updateAuthor = (req, res) => {
  const auth_id = req.body.auth_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birth_date = req.body.birth_date;
  const birth_country = req.body.birth_country;

  client.query(
    Query.updateAuthor,
    [auth_id, first_name, last_name, birth_date, birth_country],
    (err, result) => {
      console.log(auth_id);
      console.log(first_name);
      console.log(last_name);
      console.log(birth_date);
      console.log(birth_country);
      if (err) res.send(err.message);
      else res.send("updated author!");
    }
  );
};

const deleteAuthor = (req, res) => {
  const auth_id = req.body.auth_id;
  client.query(Query.deleteAuthor, [auth_id], (err, result) => {
    console.log(auth_id);
    if (err) res.send(err.message);
    else res.send("deleted author!");
  });
};

//studios
const studios = (req, res) => {
  client.query(Query.selectStudio, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addStudio = (req, res) => {
  const studio_name = req.body.studio_name;
  const c_date = req.body.c_date;
  const producer = req.body.producer;
  const location = req.body.location;

  client.query(Query.addStudio, [studio_name, c_date, producer, location], (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted studio!");
  });
};

const updateStudio = (req, res) => {
  const studio_id = req.body.studio_id;
  const studio_name = req.body.studio_name;
  const c_date = req.body.c_date;
  const producer = req.body.producer;
  const location = req.body.location;

  client.query(
    Query.updateStudio,
    [studio_id, studio_name, c_date, producer, location],
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("updated studio!");
    }
  );
};

const deleteStudio = (req, res) => {
  const studio_id = req.body.studio_id;
  client.query(Query.deleteStudio, [studio_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted studio!");
  });
};

//tv_series
const tv_series = (req, res) => {
  const sql = Query.selectTv_series;
  client.query(sql, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addTv_series = (req, res) => {
  const series_name = req.body.series_name;
  const publish_date = req.body.publish_date;
  const series_mode = req.body.series_mode;
  const total_episode = req.body.total_episode;
  const description = req.body.description;
  const auth_id = req.body.auth_id;
  const age_order = req.body.age_order;
  const photo = req.body.photo;
  const studio_id = req.body.studio_id;

  client.query(
    Query.addTv_series,
    [
      series_name,
      publish_date,
      series_mode,
      total_episode,
      description,
      auth_id,
      age_order,
      photo,
      studio_id,
    ],
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("inserted series!");
    }
  );
};

const updateTv_series = (req, res) => {
  const series_id = req.body.series_id;
  const series_name = req.body.series_name;
  const publish_date = req.body.publish_date;
  const series_mode = req.body.series_mode;
  const total_episode = req.body.total_episode;
  const description = req.body.description;
  const auth_id = req.body.auth_id;
  const age_order = req.body.age_order;
  const photo = req.body.photo;
  const studio_id = req.body.studio_id;

  client.query(
    Query.updateTv_Series,
    [
      series_id,
      series_name,
      publish_date,
      series_mode,
      total_episode,
      description,
      auth_id,
      age_order,
      photo,
      studio_id,
    ],
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("updated series!");
    }
  );
};

const deleteTv_series = (req, res) => {
  const series_id = req.body.series_id;
  client.query(Query.deleteTv_series, [series_id], (err, result) => {
    if (err) res.send(err.message);
    else res.send("deleted series!");
  });
};

//exported list
const seriesQueryList = {
  authors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  studios,
  addStudio,
  updateStudio,
  deleteStudio,
  tv_series,
  addTv_series,
  updateTv_series,
  deleteTv_series,
};

module.exports = seriesQueryList;
