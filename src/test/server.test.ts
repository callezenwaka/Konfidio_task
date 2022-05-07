import request from "supertest";
import { expect } from "chai";

import createServer from "../server";
const app = createServer();

describe("Get Route Home", function () {
  it("server instantiated without error", function (done) {
    request(app).get("/").expect(200, done);
  });
});

describe("Get Route Not Found", function () {
  const index: number = 4000;

  it("Should return a status 404 with message 'Not Found'", async () => {
    const expectedResult = 'Not Found';
    const response = await request(app).get(`/${index}/test`);
    expect(response.text).to.include(expectedResult);
    expect(response.status).to.equal(404);
  });
});