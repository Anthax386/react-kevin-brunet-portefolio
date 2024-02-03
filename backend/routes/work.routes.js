const express = require("express");
const { setWork, getWorks, editWork, deletWork } = require("../controllers/work.controller");
const router = express.Router();


router.post("/", setWork);
router.get("/", getWorks);
router.put("/:id", editWork);
router.delete("/:id", deletWork)

module.exports = router