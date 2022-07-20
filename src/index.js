const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");

//api
const API = require("./constants/api/Api");

//data base
const client = require("./database/connection.js");

//routes
const seriesRoute = require("../routes/seriesRoute");
const customerRoute = require("../routes/customerRoute");
const viewserviceRoute = require("../routes/viewserviceRoute");

//uses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//use api
app.use(API.tv_seriesAPI, seriesRoute);
app.use(API.customerAPI, customerRoute);
app.use(API.viewServiceAPI, viewserviceRoute);



app.post("/upload/addseries", (req, res) => {
  const series_name = req.body.series_name;
  const publish_date = req.body.publish_date;
  const series_mode = req.body.series_mode;
  const total_episode = req.body.total_episode;
  const description = req.body.description;
  const auth_id = req.body.auth_id;
  const age_order = req.body.age_order;
  const photo = req.body.photo;
  const studio_id = req.body.studio_id;

  const sql =
    "INSERT INTO tv_series (series_name, publish_date, series_mode, total_episode, description, auth_id, age_order, photo,studio_id) VALUES (?,?,?,?,?,?,?,?,?)";
  client.query(
    sql,
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
      console.log(
        series_name,
        publish_date,
        series_mode,
        total_episode,
        description,
        auth_id,
        age_order,
        photo,
        studio_id
      );
      if (err) {
        consolse.log(err.message);
      } else {
        res.send("inserted series!");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`use the port ->  http://localhost:${port}`);
});
