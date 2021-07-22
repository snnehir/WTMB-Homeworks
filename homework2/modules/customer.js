class Customer{
    constructor(name){
        this.name = name
        this.cust_movies = []
    }
    buyTicket(movie){
        this.cust_movies.push(movie.title)
        movie.addViewer(this)
    }
    showAllTickets(){
        this.cust_movies.forEach(printMovie)
    }
}
printMovie = (m) => console.log(m)

module.exports = Customer