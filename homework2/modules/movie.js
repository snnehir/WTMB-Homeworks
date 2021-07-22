class Movie{
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
module.exports = Movie