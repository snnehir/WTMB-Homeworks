import test from "ava"
import request from "supertest"
import app from "../app"

test("Home page", async t =>{
    const res = await request(app).get("/")
    t.is(res.status, 200)
})