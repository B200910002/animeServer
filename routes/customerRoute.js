const express = require("express");
const router = express.Router();

const list = require("../controllers/customer");

//get
router.get("/informations", list.customer);
router.get("/mails", list.mails);
router.get("/numbers", list.numbers);

//post


//put


//delete

module.exports = router;
