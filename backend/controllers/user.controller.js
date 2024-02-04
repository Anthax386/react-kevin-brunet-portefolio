const UserModel = require('../models/user.model');
const passwordHash = require('password-hash')

module.exports.signIn = async (req, res) => {
    if(!req.body.name || !req.body.password) {
        res.status(400).json({message : 'Missing Datas'});
    };
    const hashedPasswod = passwordHash.generate(req.body.password);
    
    const user = await UserModel.create({
        name: req.body.name,
        password: hashedPasswod,
        isAdmin: false
    });

    res.status(200).json(user)
}

module.exports.logIn = async (req, res) => {
    const users = await UserModel.find();
    let user
    users.map((e) => {
        if(e.name === req.body.name) {
            user = e
        }
    })
    const unhashedPassword = passwordHash.verify(
        req.body.password, user.password
    )
    if (!req.body.name === user.name && !unhashedPassword) {
        res.status(400).json({message: 'Incorrect username or password.'})
    }
    res.status(200).json({unhashedPassword: unhashedPassword, message : user.name + ' connecté'});
}

module.exports.editPassword = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    const unhashedPassword = passwordHash.verify(
        req.body.lastPassword, user.password
    )
    async function updateUser(){
        const updateUser = await UserModel.findByIdAndUpdate(
            user,
            req.body,
            {new: true}
        )
        return updateUser
    }
    const updatedUser = await updateUser()
    res.status(200).json(updatedUser)
}