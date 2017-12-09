const Pokemon = require('../model/pokemon.model');

//Get all pokemons
let getPokemon = (req, res) => {
    Pokemon.find(function(err, data){
        handleresponse(res, err, data);
    });
}

//Create a pokemon
let createPokemon = (req, res) =>{
    let data =  req.body;
    let pokemon = new Pokemon(data);
    Pokemon.create(pokemon,(err, data) => {
        handleresponse(res, err, data);
    });
}

//update a pokemon
let updatePokemon = (req, res) => {
    let id = req.params.id;
    Pokemon.findById(id,function(err, pokemon) {
        if(err){
           return res.status(500).json({error:err});
        }else if(!pokemon){
           return res.status(404).json({message:"something went wrong!"});
        }else{
            //update a pokemon or keep it same
            pokemon.name = req.body.name || pokemon.name;
            pokemon.picture = req.body.picture || pokemon.picture;
            pokemon.power = req.body.power || pokemon.power;
            pokemon.mechanism = req.body.mechanism || pokemon.mechanism;

          return  res.status(200).json({pokemon:pokemon, message:"pokemon updated successfully!"});
        }
    });
}

//delete a pokemon 
let deletePokemon = (req, res) => {
    let id = req.params.id;
    Pokemon.findByIdAndRemove(id, function(err, data){
        handleresponse(res, err, data, 'Pokemon deleted successfully!');
    });
};

function handleresponse(res, err, data, msg){
    if(err){
           return res.status(500).json({error:err});
        }else if(!data){
           return res.status(404).json({message:"something went wrong!"});
        }else{
           return res.status(200).json({Pokemon:data, message:msg});
        }
}

module.exports = {
    getPokemon : getPokemon,
    createPokemon : createPokemon,
    updatePokemon : updatePokemon,
    deletePokemon : deletePokemon
}