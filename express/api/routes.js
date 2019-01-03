'use strict';
const express = require('express');
const router = express.Router();

const characters = require('../../mock-heroes.json');


router.route("/characters")
    .get((req, res) => {
        let { format } = req.query;
        if (format === "json") {
            res.send(characters)
        }
        res.send("Welcome to the `/characters` route")
    })



module.exports = router;