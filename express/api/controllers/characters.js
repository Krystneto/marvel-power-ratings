"use strict"
const _ = require("lodash/core");

require('dotenv').config()
const charSchema = require('../../../schema/characters-schema.json')


module.exports.getCharacters = (req, res) => {
    
    const data = process.env.CHARACTERS //require('../../../characters.json')
    let { query } = req;
    let { name } = req.query;
    let { characters } = data;

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
    const data = process.env.CHARACTERS // require('../../../characters.json')
    let { id } = req.params;
    let { characters } = data;
    
    let char = _.filter(characters, el => el.id === id);
    res.send(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.send(charSchema)
}
