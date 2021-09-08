const CustomerService = require("../services/customer-service")
const MovieService = require("../services/movie-service")
const TicketService = require("../services/ticket-service")
const express = require('express')
const router = express.Router() // create router

// define the customer/all page route
router.get('/all', async (req, res)=>{
  const customers = await CustomerService.findAll()
  res.render("list", {list: customers, list_name: "customers"})

})
// define specific customer page route
router.get('/:id', async (req, res)=>{
  const customer = await CustomerService.find_by_id(req.params.id) 
  res.render("item", {item: customer})

})
// adding a customer
router.post("/", async (req, res)=>{
  await CustomerService.add(req.body)
})

// deleting a customer
router.delete("/:id", async(req, res) => {
  await CustomerService.del(req.params.id)
})

// buying ticket
router.post("/:id", async(req, res)=>{
  const movie = await MovieService.find_by_id(req.body.movie_id)
  const customer = await CustomerService.find_by_id(req.params.id)
  await TicketService.buyTicket(customer, movie)
  console.log("Ticket success!")
})

module.exports = router
