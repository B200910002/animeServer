const express = require("express");
const router = express.Router();

const list = require("../controllers/translator");

//get
router.get("/translators", list.translator);
router.get("/numbers", list.number);

//post
router.post("/addtranslator", list.addTranslator);
router.post("/addnumber", list.addNumber);

//put
router.put("/updatetranslator", list.updateTranslator);
router.put("/updatenumber", list.updateNumber); //TO DO

// delete
router.delete("/deletetranslator/:tra_id", list.deleteTranslator);
router.delete("/deletenumber/:owner_id", list.deleteNumber); //TO DO

module.exports = router;
