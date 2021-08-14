"use strict";

const FoodModel = (sql, DataTypes) => {
  let food=sql.define("food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients:{
        type:DataTypes.ARRAY(DataTypes.STRING),
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    }
  });
  return food;
};

module.exports=FoodModel;