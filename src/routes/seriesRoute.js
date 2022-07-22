const express = require("express");
const router = express.Router();

const list = require("../controllers/series");

//get
router.get("/authors", list.authors);
router.get("/studios", list.studios);
router.get("/tvseries", list.tv_series);
router.get("/tvseriesid", list.tv_series_with_id);

//post
router.post("/addauthor", list.addAuthor);
router.post("/addstudio", list.addStudio);
router.post("/addtvseries", list.addTv_series);

//put
router.put("/updateauthor", list.updateAuthor);
router.put("/updatestudio", list.updateStudio);
router.put("/updatetvseries", list.updateTv_series);

//delete
router.delete("/deleteauthor/:author_id", list.deleteAuthor);
router.delete("/deletestudio/:studio_id", list.deleteStudio);
router.delete("/deletetvseries/:series_id", list.deleteTv_series);

module.exports = router;
