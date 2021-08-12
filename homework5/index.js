const express = require("express") // require express
const app = express() // create express instance
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// A router helps you connect multiple devices to the Internet, and connect the devices to each other. 
// Also, you can use routers to create local networks of devices. These local networks are useful if you want to 
// share files among devices or allow employees to share software tools.

const customerRouter = require("./router/customer") 
const movieRouter = require("./router/movie")

require("./mongodb-connection")

app.set("view engine", "pug")

// home page: 
app.get("/", ((req, res)=>{
    res.render("layout")

}))

app.use("/customer", customerRouter) // render customerRouter, if the url starts with "/customer/..."
app.use("/movie", movieRouter)

app.listen(3000, ()=>{
    console.log("Listening...")
})

