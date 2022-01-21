const express = require('express')
const router = express.Router()

const CustomerService = require('../services/customer-service')
const MovieService = require('../services/movie-service')
const TicketService = require("../services/ticket-service")
router.get('/all', async (req, res) => {
  const people = await CustomerService.findAll()
  res.render('list', { items: people })
})

router.get('/all/json', async (req, res) => {
  const people = await CustomerService.findAll()
  res.send(people)
})

router.get('/:id', async (req, res) => {
  const user = await CustomerService.find(req.params.id)
  if (!user) res.status(404)
  res.render('data', { data: user })
})

// router.get('/:id/json', async (req, res) => {
//   const user = await CustomerService.find(req.params.id)
//   if (!user) res.status(404)
//   res.send(user)
// })

router.post('/', async (req, res) => {
  const user = await CustomerService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await CustomerService.del(req.params.id)
  res.send(user)
})

router.get('/:id/movies', async (req, res) => {
  const customer = await CustomerService.find(req.params.id)
  console.log(customer)
  res.render("movies", {items: customer})
})

// buying ticket

router.post("/:id/buy-ticket", async(req, res)=>{
  const movie = await MovieService.find(req.body.movie_id)
  const customer = await CustomerService.find(req.params.id)
  await TicketService.buyTicket(customer, movie)
  console.log("Ticket success!")
  res.send(customer)
}) 

module.exports = router
