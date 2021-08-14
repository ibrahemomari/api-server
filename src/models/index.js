"use strict";
require("dotenv");
const POSTGRES_URL =
  process.env.NODE_ENVIRONMENT === "test"
    ? "sqlite:memory "
    : "postgres://localhost:5432/lap3";
const Collection = require("./collection-class");
const FoodModel = require("./food.model");
const ClothesModel = require("./clothes.model");
const { Sequelize, DataTypes } = require("sequelize");

let sql = new Sequelize(POSTGRES_URL, {});

const foodSchema = FoodModel(sql, DataTypes);
const clothesSchema = ClothesModel(sql, DataTypes);

const foodCollection = new Collection(foodSchema);
const clothesCollection = new Collection(clothesSchema);

module.exports = {
  db: sql,
  foodCollection:foodCollection,
  clothesCollection:clothesCollection
};
