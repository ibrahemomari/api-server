"use strict";
const { app } = require("../src/server");
const supertest = require("supertest");
const request = supertest(app);

describe("Food API", () => {
  let obj = {
    id: 0,
    name: "test",
    ingredients: ["test1", "test2"],
    type: "test",
  };
  it("post", () => {
    const data = request.post("/food").send(obj);
    expect(data._data.name).toEqual(obj.name);
    expect(data._data.ingredients[0]).toEqual(obj.ingredients[0]);
    expect(data._data.ingredients[1]).toEqual(obj.ingredients[1]);
    expect(data._data.type).toEqual(obj.type);
  });
  it("get", () => {
    const data = request.post("/food").send(obj);
    expect(data._data.name).toEqual(obj.name);
    expect(data._data.ingredients[0]).toEqual(obj.ingredients[0]);
    expect(data._data.ingredients[1]).toEqual(obj.ingredients[1]);
    expect(data._data.type).toEqual(obj.type);
  });
  it("update", () => {
    let updateObj = {
      id: 0,
      name: "update test",
      ingredients: ["update test1", "update test2"],
      type: "update test",
    };
    const data = request.post(`/food/${obj.id}`).send(updateObj);
    console.log(data._data);
    expect(data._data.name).toEqual(updateObj.name);
    expect(data._data.ingredients[0]).toEqual(updateObj.ingredients[0]);
    expect(data._data.ingredients[1]).toEqual(updateObj.ingredients[1]);
    expect(data._data.type).toEqual(updateObj.type);
  });
  it("delete", () => {
    const data = request.delete(`/food/${obj.id}`);
    console.log(data._data);
    expect(data._data).toEqual(undefined);
  });
});

describe("clothes API", () => {
  let obj = {
    id: 1,
    companyName: "test",
    color: "test",
    type: "test",
  };
  it("post", () => {
    const data = request.post("/clothes").send(obj);
    expect(data._data.companyName).toEqual(obj.companyName);
    expect(data._data.color).toEqual(obj.color);
    expect(data._data.type).toEqual(obj.type);
  });
  it("get", () => {
    const data = request.post("/clothes").send(obj);
    expect(data._data.companyName).toEqual(obj.companyName);
    expect(data._data.color).toEqual(obj.color);
    expect(data._data.type).toEqual(obj.type);
  });
  it("update", () => {
    let updateObj = {
      id: 0,
      companyName: "update test",
      color: "update test1",
      type: "update test",
    };
    const data = request.post(`/clothes/${obj.id}`).send(updateObj);
    console.log(data._data);
    expect(data._data.companyName).toEqual(updateObj.companyName);
    expect(data._data.color).toEqual(updateObj.color);
    expect(data._data.type).toEqual(updateObj.type);
  });
  it("delete", () => {
    const data = request.delete(`/clothes/${obj.id}`);
    console.log(data._data);
    expect(data._data).toEqual(undefined);
  });
});
