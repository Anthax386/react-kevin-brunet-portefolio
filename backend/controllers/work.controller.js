const WorkModel = require('../models/work.model');

module.exports.getWorks = async (req, res) => {
    const work = await WorkModel.find();
    res.status(200).json(work)
}

module.exports.setWork = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message : "Merci d'ajouter un nom."})
    }
    if (!req.body.readMe) {
        res.status(400).json({ message : "Merci d'ajouter une description."})
    }
    if (!req.body.preview) {
        res.status(400).json({ message : "Merci d'ajouter une image."})
    }
    if (!req.body.githubLink) {
        res.status(400).json({ message : "Merci d'ajouter un lien du repo Github."})
    }
    if (!req.body.preview) {
        res.status(400).json({ message : "Merci d'ajouter une image."})
    }

    const work = await WorkModel.create({
        name: req.body.name,
        readMe: req.body.readMe,
        preview: req.body.preview,
        githubLink: req.body.githubLink,
        githubPageLink: req.body.githubPageLink,
        tags: req.body.tags,
        display: req.body.display
    })

    res.status(200).json(work)
}

module.exports.editWork = async (req, res) => {
    const work = await WorkModel.findById(req.params.id)

    if (!work) {
        res.status(400).json({message : "Ce work n'existe pas."})
    }

    const updateWork = await WorkModel.findByIdAndUpdate(
        work,
        req.body,
        {new: true},
    )

    res.status(200).json(updateWork)
}

module.exports.deletWork = async (req, res) => {

    const work = await WorkModel.findById(req.params.id);

    if (!work) {
        res.status(400).json({ message: "Ce work n'existe pas" });
    }

    await work.deleteOne({ _id: work })

    res.status(200).json("Work supprimé " + req.params.id);
}