"use strict";

const express = require("express");
const router = express.Router();
const { clothesCollection } = require("../models/index");

router.get("/clothes", getClothes);
router.post("/clothes", createClothes);
router.put("/clothes/:id", updateClothes);
router.delete("/clothes/:id", deleteClothes);

async function getClothes(req, res) {
  const id = req.params.id;
  const clothesInfo = await clothesCollection.read(id);
  res.json({ clothesInfo });
}

async function createClothes(req, res) {
  const data = req.body;
  const newClothes = await clothesCollection.create(data);
  res.json(newClothes);
}

async function updateClothes(req, res) {
  const id = req.params.id;
  const data = req.body;
  const newClothes = await clothesCollection.update(id, data);
  res.json(newClothes);
}

async function deleteClothes(req, res) {
  const id = req.params.id;
  const deletedClothes = await clothesCollection.delete(id);
  res.json(deletedClothes);
}

module.exports = router;
