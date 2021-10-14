import { app } from "../api/app";
import createConnection from "../core/database";
import { getConnection } from "typeorm";
import request from "supertest";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Survey Example",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all surveys", async () => {
    await request(app).post("/surveys").send({
      title: "Title Example 2",
      description: "Survey Example 2",
    });

    const response = await request(app).get("/surveys");

    expect(response.body.length).toBe(2);
  });
});
