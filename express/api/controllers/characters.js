"use strict"
const charData = require('../../../mock-heroes.json');
const charSchema = require('../../../schema/characters-schema.json')


module.exports.getCharacters = (req, res) => {
    let { name } = req.query;

    if (name) {
        let char = charData.characters.filter(el => el.name.toLowerCase() === name.toLowerCase());
        res.send(char);
    } else {
        res.send(charData);
    }
}

module.exports.getCharacterById = (req, res) => {
    let { id } = req.params;
    let char = charData.characters.filter(el => el.id === id);
    res.send(char)
}

module.exports.getCharactersSchema = (req, res) => {
    res.send(charSchema)
}

module.exports.getCharactersByAttribute = (req, res) => {

}