'use strict';
const express = require('express');
const app = express();


const router = express.Router()

app.get("/", (req, res) => {
    let obj = { test: "hi" }

    res.json(obj)
})


module.exports = app;