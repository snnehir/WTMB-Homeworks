const CustomerService = require("./services/customer-service")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.set("view engine", "pug")

app.get("/", ((req, res)=>{
    res.render("layout")

}))

app.get("/all-customers",  (async(req, res)=>{
    const people = await CustomerService.findAll()
    res.render("all-customers", {people: people})

}))

app.get("/customer/:id",  (async(req, res)=>{
    const id = req.params.id
    const person = await CustomerService.find_item(id)
    res.render("customer", {person: person})

}))


/*
axios.post("/customer", {"name": "Snur", "cust_movies": ["Frozen", "Recep İvedik"]})
*/
app.use(bodyParser.json())
app.post("/customer", ( async(req, res)=>{
    const new_customer = await CustomerService.add(req.body)
    console.log("Eklendi")
    res.send(new_customer)
}))

app.delete("/customer/:id", (async(req, res)=>{
    await CustomerService.del(req.params.id)
    console.log("Silindi")
}))

app.listen(3000, ()=>{
    console.log("Listening...")
})