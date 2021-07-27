const Customer = require("./modules/customer")
const Movie = require("./modules/movie")
const CustomerService = require("./services/customer-service")
const MovieService = require("./services/movie-service")

console.log("Hello world!")

async function main(){
    const kevs = new Customer("Kevs")
    const snur = new Customer("Snur")
    const kaank = new Customer("KaanK")

    const recep_ivedik = new Movie("Recep İvedik", "Comedy", "15:00")
    
    kevs.buyTicket(recep_ivedik)
    snur.buyTicket(recep_ivedik)
    kaank.buyTicket(recep_ivedik)

    recep_ivedik.report()

    await CustomerService.add(kevs)
    await CustomerService.add(snur)
    await CustomerService.add(kaank)

    const people = await CustomerService.findAll()

    await CustomerService.del(0)
    
    console.log(people.length)
    console.log(people[0].name + " " + people[0].id)
    console.log(people[1].name + " " + people[1].id)
    console.log(people[2].name + " " + people[2].id)
    const person = await CustomerService.find_item(3)
    console.log(person)
}

main()