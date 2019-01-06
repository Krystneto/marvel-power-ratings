"use strict"
const _ = require("lodash/core");

const data = require('../../../characters.json')
const charSchema = require('../../../schema/characters-schema.json')


module.exports.getCharacters = (req, res) => {
    let { query } = req;
    let { name } = req.query;
    let { characters } = data;

    if (name) {
        let character = _.filter(characters, el => el.name.toLowerCase() === name.toLowerCase());
        res.json(character);
    } else if (query) {
        let charsList = _.filter(characters, { "attributes": query })
        res.json(charsList)
    } else {
        res.json(data);
    }
}

module.exports.getCharacterById = (req, res) => {
    let { id } = req.params;
    let { characters } = data;
    
    let char = _.filter(characters, el => el.id === id);
    res.json(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.json(charSchema)
}
