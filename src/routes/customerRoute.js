const express = require("express");
const router = express.Router();

const customer = require("../controllers/customer");

//get
router.get("/informations", customer.customer);
router.get("/emails", customer.emails);
router.get("/numbers", customer.numbers);

//post
router.post("/login", customer.login);
router.post("/regist", customer.regist);
router.post("/addcustomer", customer.addCustomer);
router.post("/addnumber", customer.addNumber);
router.post("/addemail", customer.addEmail);

//put
router.put("/updatecustomer", customer.updateCustomer);
router.put("/updatenumber", customer.updateNumber);
router.put("/updateemail", customer.updateEmail);

//delete
router.delete("/deletecustomer/:cus_id", customer.delelteCustomer);
router.delete("/deletenumber/:cus_id/:number", customer.deleteNumber);
router.delete("/deleteemail/:cus_id/:email", customer.deleteEmail);

module.exports = router;
