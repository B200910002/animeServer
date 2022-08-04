const express = require("express");
const router = express.Router();

const list = require("../controllers/customer");

//get
router.get("/informations", list.customer);
router.get("/emails", list.emails);
router.get("/numbers", list.numbers);

//post
router.post("/login", list.login);
router.post("/regist", list.regist);
router.post("/addcustomer", list.addCustomer);
router.post("/addnumber", list.addNumber);
router.post("/addemail", list.addEmail);

//put
router.put("/updatecustomer", list.updateCustomer);
router.put("/updatenumber", list.updateNumber);
router.put("/updateemail", list.updateEmail);

//delete
router.delete("/deletecustomer/:cus_id", list.delelteCustomer);
router.delete("/deletenumber/:cus_id/:number", list.deleteNumber);
router.delete("/deleteemail/:cus_id/:email", list.deleteEmail);

module.exports = router;
