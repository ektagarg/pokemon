'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon.routes');
const multer = require('multer');
const crypto = require('crypto');
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

//picture upload using multer
// const storage = multer.diskStorage({
//   destination: './public/images/pokemon',
//   filename: function (req, file, callback) {
//     crypto.pseudoRandomBytes(16, function(err, raw) {
//     if (err) return callback(err);
//     callback(null, raw.toString('hex') + path.extname(file.originalname));
//     });
//   }
// });
// var upload = multer({ storage:storage});
// app.post('/upload', upload.single('pokemon'), (req, res) => {
//   if (!req.file) {
//     console.log(req.body);
//     return res.send({
//       success: false
//     });

//   } else {
//     console.log('file received');
//     return res.send({
//       success: true
//     })
//   }
// });

