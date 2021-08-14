"use strict";

const express = require("express");
const router = express.Router();
const { foodCollection } = require("../models/index");

router.get("/food", getFood);
router.post("/food", createFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);

async function getFood(req, res) {
  const id = req.params.id;
  const foodInfo = await foodCollection.read(id);
  res.json({ foodInfo });
}

async function createFood(req, res) {
  const data = req.body;
  const newFood = await foodCollection.create(data);
  res.json(newFood);
}

async function updateFood(req, res) {
  const id = req.params.id;
  const data = req.body;
  const newFood = await foodCollection.update(id, data);
  res.json(newFood);
}

async function deleteFood(req, res) {
  const id = req.params.id;
  const deletedFood = await foodCollection.delete(id);
  res.json(deletedFood);
}

module.exports = router;
