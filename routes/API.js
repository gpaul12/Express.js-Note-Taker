const route = require("express").Router();
const path = require("path");
const db = require("../db/db.json");
const fs = require("fs");

route.get("/notes", (req, res) => {
  const savedNotes = db;
  res.json(savedNotes);
});
