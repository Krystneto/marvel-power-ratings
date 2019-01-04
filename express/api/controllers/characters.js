"use strict"
const _ = require("lodash/core");

const charSchema = require('../../../schema/characters-schema.json')


module.exports.getCharacters = (req, res) => {
    let { query } = req;
    let { name } = req.query;
    let data = JSON.parse(process.env.MOCK_HEROES);
    let { characters } = data;

    if (name) {
        let character = _.filter(charData.characters, el => el.name.toLowerCase() === name.toLowerCase());
        res.send(character);
    } else if (query) {
        let charsList = _.filter(characters, { "attributes": query })
        res.send(charsList)
    } else {
        res.send(data);
    }
}

module.exports.getCharacterById = (req, res) => {
    let { id } = req.params;
    let { characters } = JSON.parse(process.env.MOCK_HEROES);
    
    let char = _.filter(characters, el => el.id === id);
    res.send(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.send(charSchema)
}
