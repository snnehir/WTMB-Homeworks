import test from "ava"
import request from "supertest"
import app from "../app"


test("Add new customer", async (t)=>{
  t.plan(4) // response status, check params 
  const customer = {name:"Someone", age:21, movies:[] } // create a movie
  const res = await request(app).post("/customer").send(customer) // send http request to add aybucon to db and get the response
  // checking for server response status success
  t.is(res.status, 200)
  // check params
  t.is(res.body.name, customer.name)
  t.is(res.body.age, customer.age)
  t.deepEqual(res.body.movies, customer.movies)
})

test("Delete customer", async(t)=>{
  const customer = {name:"Someone", age:21, movies:[] } // create a movie
  const createCustomer = await request(app).post("/customer").send(customer)
  t.is(createCustomer.status, 200)

  const res = await request(app).delete(`/customer/${createCustomer.body._id}`)
  t.is(res.status, 200)
  t.is(res.ok, true)
  // trying to render the detail page for the deleted customer
  const fetchedCustomer = await request(app).get(`/customer/${createCustomer.body._id}`)
  t.is(fetchedCustomer.status, 404) // deleted customer must not be founded
})

test("Fetch customer", async t=>{
    const customer = {name:"Someone", age:21, movies:[] } // create a movie
    const createCustomer = await request(app).post("/customer").send(customer)
    t.is(createCustomer.status, 200)

    const res = await request(app).get(`/customer/${createCustomer.body._id}`)
    t.is(res.status, 200) 
    t.is(res.ok, true)

})

test("Get all customer", async t=>{
    const customer = {name:"Someone", age:21, movies:[] } // create a movie
    const createCustomer = await request(app).post("/customer").send(customer)
    t.is(createCustomer.status, 200)
  
    const res = await request(app).get("/customer/all")
    t.is(res.status, 200)

    // const resJson = await request(app).get('/customer/all/json')
    // //console.log(resJson.body)
    // t.is(resJson.status, 200)
    // t.true(Array.isArray(resJson.body), 'Body should be an array')
    // t.true(resJson.body.length > 0)
})

test("Buy ticket", async t=>{
    const customer = {name:"Someone", age:21, movies:[] } // create a movie
    const createCustomer = await request(app).post("/customer").send(customer)
    t.is(createCustomer.status, 200)
  
    const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } 
    const createdMovie = await request(app).post("/movie").send(movie)
    t.is(createdMovie.status, 200)

    const res = await request(app).post(`/customer/${createCustomer.body._id}/buy-ticket`).send({movie_id: createdMovie.body._id})
    t.is(res.status, 200)

})

test("Show customer movies", async t=>{
  const customer = {name:"Someone", age:21, movies:[] } // create a movie
  const createCustomer = await request(app).post("/customer").send(customer)
  t.is(createCustomer.status, 200)

  const res = await request(app).get(`/customer/${createCustomer.body._id}/movies`)
  t.is(res.status, 200)

})







