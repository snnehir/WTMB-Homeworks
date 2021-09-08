import test from "ava"
import request from "supertest"
import app from "../app"


test("Add new movie", async (t)=>{
  t.plan(4) // response status, check params 
  const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } // create a movie
  const res = await request(app).post("/movie").send(movie) // send http request to add aybucon to db and get the response
  // checking for server response status success
  t.is(res.status, 200)
  // check params
  t.is(res.body.name, movie.name)
  t.is(res.body.category, movie.category)
  t.deepEqual(res.body.viewers, movie.viewers)
})

test("Delete movie", async(t)=>{
  t.plan(3)
  const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } 
  const createdMovie = await request(app).post("/movie").send(movie) // create a movie and send

  // deletion
  const res = await request(app).delete(`/movie/${createdMovie.body._id}`)
  t.is(res.status, 200) 
  t.is(res.ok, true)

  // trying to render the detail page for the deleted user
  const fetchedAybucon = await request(app).get(`/movie/${createdMovie.body._id}`)
  t.is(fetchedAybucon.status, 404) // deleted movie must not be founded
})

test("Fetch movie", async t=>{
  t.plan(2)
  const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } 
  const createdMovie = await request(app).post("/movie").send(movie) 

  const res = await request(app).get(`/movie/${createdMovie.body._id}`)
  t.is(res.status, 200) 
  t.is(res.ok, true)

})

test("Get all movies", async t=>{
  const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } 
  const createdMovie = await request(app).post("/movie").send(movie)
  t.is(createdMovie.status, 200)
  const res = await request(app).get("/movie/all")
  t.is(res.status, 200)

  // const resJson = await request(app).get('/movie/all/json')
  // //console.log(resJson.body)
  // t.is(resJson.status, 200)
  // t.true(Array.isArray(resJson.body), 'Body should be an array')
  // t.true(resJson.body.length > 0)
})


test("Get movies with a certain category", async t=>{
  const movie = {name:"Star Wars", category:"Fantastic", price: 125, viewers:[] } 
  const createdMovie = await request(app).post("/movie").send(movie)
  t.is(createdMovie.status, 200)
  const all_movies = await request(app).get("/movie/all")
  t.is(all_movies.status, 200)

  const res = await request(app).get(`/movie/categories/${createdMovie.body.category}`)
  t.is(res.status, 200)
})





