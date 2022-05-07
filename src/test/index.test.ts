import request from "supertest";
import { assert, expect } from "chai";

import createServer from "../server";
const app = createServer();

describe("Get Route", function () {
  it("Should return a status of 200 with message 'Ok'", async () => {
    const expectedResult = 'Ok';
    const response = await request(app).get(`/`);
    expect(response.type).to.equal('application/json');
    expect(response.status).to.equal(200);
    expect(response.text).to.include(expectedResult);
  });
});

describe("Post Route", function () {
  let data = {
    "balances": [100, 100, 500],
    "transactions": [[0, 1, 50], [1, 2, 80], [2, 0, 450]],
    "blockSize": 2
  }

  it("Should return a status 201 with message 'Created'", async () => {
    const expectedResult = 'Created';
    const response = await request(app).post(`/`)
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);

    expect(response.status).to.equal(201);
    expect(response.text).to.include(expectedResult);
  });
})

describe("Get Route By Id", function () {
  const index: number = 0;

  it("Should return a status 200 with a value", async () => {
    const response = await request(app).get(`/${index}`);
    expect(response.status).to.equal(200);
    expect(response.text).to.be.a('string');
  });
})

describe("Get Route By Wrong Id", function () {
  const index: number = 10000;
  const expectedResult = 'Internal Server Error';

  it("Should return a status 500 with message 'Internal Server Error'", async () => {
    const response = await request(app).get(`/${index}`);
    expect(response.status).to.equal(500);
    expect(response.text).to.include(expectedResult);
  });
})