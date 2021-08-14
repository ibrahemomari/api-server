"use strict";
const { app } = require("../src/server");
const supertest = require("supertest");
const request = supertest(app);

describe("404 handler",()=>{
    it('404 on a bad route', async () => {
        const response = await request.get('/notfound'); 
        expect(response.status).toEqual(404);
    });
})