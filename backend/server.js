const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')
const dotenv = require("dotenv").config();
const port = 5000

//connection à la DB
connectDB();

const app = express();

//Middleware qui permet de rraiter les données de la Request (req)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/work', require('./routes/work.routes'));
app.use('/lang', require('./routes/lang.routes'));
app.use('/tool', require('./routes/tool.routes'));
app.use('/user', require('./routes/user.routes'));

// Lancer le serveur
app.listen(port, () => console.log('Le serveur a démarre au port '+ port));