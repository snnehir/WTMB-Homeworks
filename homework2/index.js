/*
Separate classes into modules
Create json files and save data into them
Read data from json files
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

/* JSON Operations */

movies = [recep_ivedik, avatar, me_before_you] 
customers = [kevs, snur, kaank]


DB.saveData("./homework2/database/Movies.json", movies)
DB.saveData("./homework2/database/Customers.json", customers)

arr = DB.readData("./homework2/database/Movies.json")
console.log(arr[0].title)
