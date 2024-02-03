const express = require("express");
const { setLang, getLang, editLang, deletLang } = require("../controllers/lang.controller");
const router = express.Router();

router.post("/", setLang)
router.get("/", getLang)
router.put("/:id", editLang)
router.delete("/:id", deletLang)

module.exports = router