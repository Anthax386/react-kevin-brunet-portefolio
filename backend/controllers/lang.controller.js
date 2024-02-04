const LangModel = require('../models/lang.model');

module.exports.getLang = async (req, res) => {
    const lang = await LangModel.find();
    res.status(200).json(lang);
};

module.exports.setLang = async (req, res) => {
    if (!req.body.name || !req.body.image) {
        res.status(400).json({ message : "Missing datas"});
    };
    const lang = await LangModel.create({
        name: req.body.name,
        image: req.body.image,
        display: req.body.display
    });
    res.status(200).json(lang);
};

module.exports.editLang = async (req, res) => {
    const lang = await LangModel.findById(req.params.id);
    if (!lang) {
        res.status(400).json({message : "404 : lang not found"});
    };
    const updateLang = await LangModel.findByIdAndUpdate(
        lang,
        req.body,
        {new: true},
    );
    res.status(200).json(updateLang);
};

module.exports.deletLang = async (req, res) => {
    const lang = await LangModel.findById(req.params.id);
    if (!lang) {
        res.status(400).json({ message: "404 : lang not found" });
    };
    await lang.deleteOne({ _id: lang });
    res.status(200).json("Lang deleted " + req.params.id);
};