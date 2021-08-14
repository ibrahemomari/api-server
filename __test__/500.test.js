"use strict";
const { app } = require("../src/server");
const supertest = require("supertest");
const request = supertest(app);

describe("500 handler",()=>{
    it('500 on a bad method', async () => {
        const response = await request.post('/bad'); 
        expect(response.status).toEqual(500);
    });
})