'use strict';
const express = require('express');
const router = express.Router();

const { getCharacters, getCharacterById, getCharactersSchema } = require('./controllers/characters');

// Routes
router.get('/characters/schema/', getCharactersSchema)

router.get('/characters/:id/', getCharacterById)

router.get("/characters/", getCharacters)


module.exports = router;