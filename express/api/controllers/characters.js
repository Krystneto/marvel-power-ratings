"use strict"
const _ = require("lodash/core");

const charData = require('../../../mock-heroes.json');
const charSchema = require('../../../schema/characters-schema.json')


module.exports.getCharacters = (req, res) => {
    let { query } = req;
    let { name } = req.query;
    let { characters } = charData;

    if (name) {
        let char = _.filter(charData.characters, el => el.name.toLowerCase() === name.toLowerCase());
        res.send(char);
    } else {
        res.send(charData);
    }
}

module.exports.getCharacterById = (req, res) => {
    let { id } = req.params;
    let char = _.filter(charData.characters, el => el.id === id);
    res.send(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.send(charSchema)
}
