const MovieService = require("../services/movie-service")
const express = require('express')
const router = express.Router() // create router

router.get('/categories/all', async (req, res)=>{
  const movies = await MovieService.findAll()
  res.render("list", {list: movies, list_name: "movies"})

})
router.get('/:id', async (req, res)=>{
  const movie = await MovieService.find_by_id(req.params.id) 
  res.render("item", {item: movie})

})
// show movies with certain category
router.get('/categories/:category', async (req, res) => {
  movies = await MovieService.find_by_category(req.params.category) 
  res.render("list", {list: movies, list_name: req.params.category})
})
// adding movie
router.post("/", async (req, res)=>{
  const newMovie = await MovieService.add(req.body)
  console.log("Success adding ", newMovie)
})

// deleting movie
router.delete("/:id", async(req, res) => {
  await MovieService.del(req.params.id)
  console.log("Success delete. ")
})

module.exports = router