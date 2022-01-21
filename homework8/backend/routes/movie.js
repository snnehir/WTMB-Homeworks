const express = require('express')
const router = express.Router()

const MovieService = require('../services/movie-service')

router.get('/all', async (req, res) => {
  const meetups = await MovieService.findAll()
  res.render('list', { items: meetups })
})

router.get('/all/json', async (req, res) => {
  const meetups = await MovieService.findAll()
  res.send(meetups)
})

router.get('/:id', async (req, res) => {
  const meetup = await MovieService.find(req.params.id)
  if (!meetup) res.status(404)
  res.render('data', { data: meetup })
})

// router.get('/:id/json', async (req, res) => {
//   const meetup = await MovieService.find(req.params.id)
//   if (!meetup) res.status(404)
//   res.send(meetup)
// })

router.post('/', async (req, res) => {
  const meetup = await MovieService.add(req.body)
  res.send(meetup)
})

router.delete('/:id', async (req, res) => {
  const meetup = await MovieService.del(req.params.id)
  res.send(meetup)
})


router.get('/categories/:category', async (req, res) => {
  const movies = await MovieService.find_by_category(req.params.category) 
  res.render("list", {items: movies})
})

router.get('/categories/:category/json', async (req, res) => {
  const movies = await MovieService.find_by_category(req.params.category) 
  console.log(req.params.category)
  res.send(movies)
})

module.exports = router
