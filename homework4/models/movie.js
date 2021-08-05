const Customer = require("./customer")
const chalk = require("chalk")
class Movie{
    constructor(title, category, time, viewers = [], id){
        this.title = title
        this.category = category
        this.time = time
        this.id = id
        this.viewers = viewers
    }
/*     addViewer(viewer){
        this.viewers.push(viewer)
    }
    showViewers(){
        this.viewers.forEach(printCustomer)
    }
 */
    report() {
        console.log(this.title, ' movie starts at', this.time, 'and number of viewers are', this.viewers.length)
    }
    static create(obj){
        return new Movie(obj.title, obj.category, obj.viewers, obj.id)
    }

}

printCustomer = (cust) => console.log(cust.name)
module.exports = Movie