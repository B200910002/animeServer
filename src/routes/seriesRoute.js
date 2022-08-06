const express = require("express");
const router = express.Router();

const series = require("../controllers/series");

//get
router.get("/authors", series.authors);
router.get("/studios", series.studios);
router.get("/tvseries", series.tv_series);
router.get("/tvseriesid", series.tv_series_with_id);
router.get("/characters", series.characters);
router.get("/voiceactors", series.voiceActor);

//post
router.post("/addauthor", series.addAuthor);
router.post("/addstudio", series.addStudio);
router.post("/addtvseries", series.addTv_series);
router.post("/addcharacter"); //TO DO
router.post("/addvoiceactor", series.addVoiceActor);
router.post("/uploadpic", series.uploadPic);

//put
router.put("/updateauthor", series.updateAuthor);
router.put("/updatestudio", series.updateStudio);
router.put("/updatetvseries", series.updateTv_series);
router.put("/updatecharacter"); //TO DO
router.put("/updatevoiceactor", series.updateVoiceActor);

//delete
router.delete("/deleteauthor/:author_id", series.deleteAuthor);
router.delete("/deletestudio/:studio_id", series.deleteStudio);
router.delete("/deletetvseries/:series_id", series.deleteTv_series);
router.delete("/deletecharacter/:"); // TO DO
router.delete("/deletevoiceactor/:actor_id", series.deleteVoiceActor);

module.exports = router;
