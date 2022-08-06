const express = require("express");
const router = express.Router();

const translator = require("../controllers/translator");

//get
router.get("/translators", translator.translator);
router.get("/numbers", translator.number);

//post
router.post("/addtranslator", translator.addTranslator);
router.post("/addnumber", translator.addNumber);

//put
router.put("/updatetranslator", translator.updateTranslator);
router.put("/updatenumber", translator.updateNumber); //TO DO

// delete
router.delete("/deletetranslator/:tra_id", translator.deleteTranslator);
router.delete("/deletenumber/:owner_id", translator.deleteNumber); //TO DO

module.exports = router;
