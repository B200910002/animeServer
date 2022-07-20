const express = require("express");
const router = express.Router();

const list = require("../controllers/viewservice");

router.get("/informations", list.viewservice);

module.exports = router;
