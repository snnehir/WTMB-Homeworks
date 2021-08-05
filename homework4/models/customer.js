class Customer{
    constructor(name, id, cust_movies){
        this.name = name
        this.id = id
        this.cust_movies = cust_movies
    }
    buyTicket(movie){
        this.cust_movies.push(movie)
        movie.viewers.push(this)
    }
    showAllTickets(){
        this.cust_movies.forEach(printMovie)
    }
    static create(obj){ // {name, id}
        return new Customer(obj.name, obj.id, obj.cust_movies)
    }
}
printMovie = (m) => console.log(m)

module.exports = Customer