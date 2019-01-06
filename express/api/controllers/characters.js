"use strict"
require('dotenv').config();
const _ = require("lodash/core");

const charSchema = require('../../../schema/characters-schema.json')
const data = JSON.parse(process.env.CHARACTERS) || require('../../../characters.json')

module.exports.getCharacters = (req, res) => {
    // console.log(process.env)
    // console.log(JSON.parse(process.env.CHARACTERS))
    // const data = process.env.CHARACTERS //|| require('../../../characters.json')
    let { query } = req;
    let { name } = req.query;
    let { characters } = data;
    console.log(characters)

    if (name) {
        let character = _.filter(characters, el => el.name.toLowerCase() === name.toLowerCase());
        res.send(character);
    } else if (query) {
        let charsList = _.filter(characters, { "attributes": query })
        res.send(charsList)
    } else {
        res.send(data);
    }
}

module.exports.getCharacterById = (req, res) => {
    // const data = process.env.CHARACTERS || require('../../../characters.json')
    let { id } = req.params;
    let { characters } = data;
    
    let char = _.filter(characters, el => el.id === id);
    res.send(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.send(charSchema)
}
