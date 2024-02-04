const express = require("express");
const { signIn, logIn, editPassword } = require("../controllers/user.controller");

const router = express.Router();

router.post('/signin', signIn)
router.post('/login', logIn)
router.put('/:id', editPassword)

module.exports = router