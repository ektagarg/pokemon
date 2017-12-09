var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  name:{
      type : String,
      required: true,
      unique: true
  },  
  picture:{
    type : String,
    required: true,
  },
  power:{
    type : String,
    required: true,
  },
  mechanism: {
    type: String,
    enum : ['Attack','Defence'],
    default: 'Attack'
    },
});

module.exports = mongoose.model( 'pokemon' , pokemonSchema );