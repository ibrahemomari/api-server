"use strict";

const clothesModel = (sql, DataTypes) => {
  let clothes=sql.define("clothes", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    }
  });
  return clothes;
};

module.exports=clothesModel;