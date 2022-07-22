const client = require("../database/connection");
const Query = require("../constants/query/Query");

//models
const Author = require("./models/Author");
const Studio = require("./models/Studio");
const Series = require("./models/Series");

//authors
const authors = (req, res) => {
  client.query(Query.selectAuthors, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addAuthor = (req, res) => {
  const author = new Author(
    req.body.author_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.birth_country
  );

  client.query(Query.addAuthor, author.getAuthorWithoutId(), (err, result) => {
    console.log(
      author.first_name,
      author.last_name,
      author.birth_date,
      author.birth_country
    );
    if (err) res.send(err.message);
    else res.send("inserted author!");
  });
};

const updateAuthor = (req, res) => {
  const author = new Author(
    req.body.author_id,
    req.body.first_name,
    req.body.last_name,
    req.body.birth_date,
    req.body.birth_country
  );

  client.query(Query.updateAuthor, author.getAuthorWithId(), (err, result) => {
    console.log(
      author.author_id,
      author.first_name,
      author.last_name,
      author.birth_date,
      author.birth_country
    );
    if (err) res.send(err.message);
    else res.send("updated author!");
  });
};

const deleteAuthor = (req, res) => {
  const { author_id } = req.params;
  client.query(Query.deleteAuthor, [author_id], (err, result) => {
    console.log(author_id);
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
  const studio = new Studio(
    req.body.studio_id,
    req.body.studio_name,
    req.body.c_date,
    req.body.producer,
    req.body.location
  );

  client.query(Query.addStudio, studio.getStudioWithoutId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("inserted studio!");
  });
};

const updateStudio = (req, res) => {
  const studio = new Studio(
    req.body.studio_id,
    req.body.studio_name,
    req.body.c_date,
    req.body.producer,
    req.body.location
  );

  client.query(Query.updateStudio, studio.getStudioWithId(), (err, result) => {
    if (err) res.send(err.message);
    else res.send("updated studio!");
  });
};

const deleteStudio = (req, res) => {
  const { studio_id } = req.params;
  console.log(req.params);
  client.query(Query.deleteStudio, [studio_id], (err, result) => {
    console.log(studio_id);
    if (err) res.send(err.message);
    else res.send("deleted studio!");
  });
};

//tv_series
const tv_series = (req, res) => {
  const sql1 = Query.tv_series;
  client.query(sql1, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const tv_series_with_id = (req, res) => {
  const sql = Query.selectTv_series;
  // const series = new Series();
  // series.series_id = req.body.series_id;
  client.query(sql, (err, result) => {
    if (err) res.send(err.message);
    else res.send(result);
  });
};

const addTv_series = (req, res) => {
  let uploadPath;
  const series = new Series(
    req.body.series_id,
    req.body.series_name,
    req.body.publish_date,
    req.body.series_mode,
    req.body.total_episode,
    req.body.description,
    req.body.auth_id,
    req.body.age_order,
    req.body.photo,
    req.body.studio_id
  );

  client.query(
    Query.addTv_series,
    series.getSeriesWithoutId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("inserted series!");
    }
  );
};

const updateTv_series = (req, res) => {
  const series = new Series(
    req.body.series_id,
    req.body.series_name,
    req.body.publish_date,
    req.body.series_mode,
    req.body.total_episode,
    req.body.description,
    req.body.auth_id,
    req.body.age_order,
    req.body.photo,
    req.body.studio_id
  );

  client.query(
    Query.updateTv_Series,
    series.getSeriesWithId(),
    (err, result) => {
      if (err) res.send(err.message);
      else res.send("updated series!");
    }
  );
};

const deleteTv_series = (req, res) => {
  const { series_id } = req.params;
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
  tv_series_with_id,
};

module.exports = seriesQueryList;
