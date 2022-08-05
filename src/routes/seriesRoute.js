const express = require("express");
const router = express.Router();

const list = require("../controllers/series");

//get
router.get("/authors", list.authors);
router.get("/studios", list.studios);
router.get("/tvseries", list.tv_series);
router.get("/tvseriesid", list.tv_series_with_id);
router.get("/characters", list.characters);
router.get("/voiceactors", list.voiceActor);

//post
router.post("/addauthor", list.addAuthor);
router.post("/addstudio", list.addStudio);
router.post("/addtvseries", list.addTv_series);
router.post("/addcharacter"); //TO DO
router.post("/addvoiceactor", list.addVoiceActor);
router.post("/uploadpic", list.uploadPic);

//put
router.put("/updateauthor", list.updateAuthor);
router.put("/updatestudio", list.updateStudio);
router.put("/updatetvseries", list.updateTv_series);
router.put("/updatecharacter"); //TO DO
router.put("/updatevoiceactor", list.updateVoiceActor);

//delete
router.delete("/deleteauthor/:author_id", list.deleteAuthor);
router.delete("/deletestudio/:studio_id", list.deleteStudio);
router.delete("/deletetvseries/:series_id", list.deleteTv_series);
router.delete("/deletecharacter/:"); // TO DO
router.delete("/deletevoiceactor/:actor_id", list.deleteVoiceActor);

module.exports = router;
