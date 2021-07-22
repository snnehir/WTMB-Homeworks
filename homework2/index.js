/*
Sperate classes into modules
Require them in index
Install npm package and use (chalk)
Create json files and save datas into them
*/
const Movie = require("./modules/movie")
const Customer = require("./modules/customer")
const DB = require("./database/database")



me_before_you = new Movie("Me Before You", "Romantic - Drama")
recep_ivedik = new Movie("Recep İvedik", "Comedy")
avatar = new Movie("Avatar", "Adventure Sci-fic")
it = new Movie("It", "Thriller")

kevs = new Customer("Kevs")
kevs.buyTicket(me_before_you)
kevs.buyTicket(recep_ivedik)

snur = new Customer("Snur")
snur.buyTicket(avatar)
snur.buyTicket(recep_ivedik)

kaank = new Customer("KaanK")
kaank.buyTicket(recep_ivedik)

console.log("\nJSON Operations\n")

movies = [recep_ivedik, avatar, me_before_you] 
customers = [kevs, snur, kaank]

DB.saveData("./week2/homework2/database/Movies.json", movies)
DB.saveData("./week2/homework2/database/Customers.json", customers)

arr = DB.readData("./week2/homework2/database/Movies.json")
console.log(arr[0].title)
