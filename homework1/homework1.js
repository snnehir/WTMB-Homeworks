/*
Write at least 2 classes and make interactions between them
Movie -> has viewers/customers
Customer -> goes to movie
*/

Movie = class{
    constructor(title, category){
        this.title = title
        this.category = category
        this.viewers = []
    }
    addViewer(viewer){
        this.viewers.push(viewer)
    }
    showViewers(){
        this.viewers.forEach(printCustomer)
    }

}
printCustomer = (cust) => console.log(cust.name)
printMovie = (m) => console.log(m.title)

Customer = class{
    constructor(name){
        this.name = name
        this.cust_movies = []
    }
    buyTicket(movie){
        this.cust_movies.push(movie)
        movie.addViewer(this)
    }
    showAllTickets(){
        this.cust_movies.forEach(printMovie)
    }
}
a = 6
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

recep_ivedik.showViewers()
kevs.showAllTickets()
