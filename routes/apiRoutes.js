// GET route

// POST route

// DELETE

var express = require("express");
var app = express();
const path = require("path");

const notes = require("../db/db.json");
const store = require("../db/store");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {
    notesData = req.body;
    console.log(notesData);
    notes.push(notesData);
    res.send(notes);
  });
};
