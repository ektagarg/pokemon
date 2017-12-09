'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon.routes');

// setup configuration mongodb database
var mongoDB = 'mongodb://127.0.0.1/pokemon-app';
mongoose.connect(mongoDB).then( () => { console.log("success")} ) ;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const host = 'localhost';
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//pokemon api
app.use('/api' , pokemonRoutes);
app.listen(port, host, () => {
    console.log('Server is running at '+ host +':' + port);
})
