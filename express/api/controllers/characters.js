"use strict"
const _ = require("lodash/core");


module.exports.getCharacters = (req, res) => {
    // const data = JSON.parse(process.env.CHARACTERS) //|| require('../../../characters.json')
    const data = JSON.parse(process.env.CHARACTERS)
    console.log(data)
    // console.log(JSON.parse(process.env.CHARACTERS))
    // const data = process.env.CHARACTERS //|| require('../../../characters.json')
    let { query } = req;
    let { name } = req.query;
    let { characters } = data;
    // console.log(characters)

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
    const data = JSON.parse(process.env.CHARACTERS) //|| require('../../../characters.json')
    let { id } = req.params;
    let { characters } = data;
    
    let char = _.filter(characters, el => el.id === id);
    res.json(char)
}

module.exports.getCharactersSchema = (req, res) => {
    const charSchema = require('../../../schema/characters-schema.json')
    res.json(charSchema)
}
