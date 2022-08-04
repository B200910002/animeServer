const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(fileUpload());

//api
const API = require("./constants/api/Api");

//data base
const client = require("./database/connection.js");

//routes
const seriesRoute = require("./routes/seriesRoute");
const customerRoute = require("./routes/customerRoute");
const translatorRoute = require("./routes/translatorRoute");
const viewserviceRoute = require("./routes/viewserviceRoute");

//uses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//use api
app.use(API.tv_seriesAPI, seriesRoute);
app.use(API.customerAPI, customerRoute);
app.use(API.translatorAPI, translatorRoute);
app.use(API.viewServiceAPI, viewserviceRoute);

app.listen(port, () => {
  console.log(`use the port ->  http://localhost:${port}`);
});
