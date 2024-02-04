const ToolModel = require('../models/tool.model');

module.exports.getTool = async (req, res) => {
    const tool = await ToolModel.find();
    res.status(200).json(tool);
};

module.exports.setTool = async (req, res) => {
    if (!req.body.name || !req.body.image) {
        res.status(400).json({ message : "Missing datas"});
    };
    const tool = await ToolModel.create({
        name: req.body.name,
        image: req.body.image,
        display: req.body.display,
    });
    res.status(200).json(tool);
};

module.exports.editTool = async (req, res) => {
    const tool = await ToolModel.findById(req.params.id);
    if (!tool) {
        res.status(400).json({message : "404 : tool not found"});
    };
    const updateTool = await ToolModel.findByIdAndUpdate(
        tool,
        req.body,
        {new: true},
    );
    res.status(200).json(updateTool);
};

module.exports.deletTool = async (req, res) => {
    const tool = await ToolModel.findById(req.params.id);
    if (!tool) {
        res.status(400).json({ message: "404 : tool not found" });
    };
    await tool.deleteOne({ _id: tool });
    res.status(200).json("tool supprimé " + req.params.id);
};