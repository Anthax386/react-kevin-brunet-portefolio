const express = require("express");
const { setTool, getTool, editTool, deletTool } = require("../controllers/tool.contoller");

const router = express.Router();

router.post("/", setTool)
router.get("/", getTool)
router.put("/:id", editTool)
router.delete("/:id", deletTool)

module.exports = router