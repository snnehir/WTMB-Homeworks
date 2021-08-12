const { model } = require('mongoose') // https://mongoosejs.com/docs/guides.html

module.exports = class Service{
    // no need to constructor

    async findAll(){
        return this.model.find() 
    }

    async add(item){
        return this.model.create(item) // mongodb creates unique id

    }

    async find_by_id(itemId){
        return this.model.findById(itemId) 
    }

    async del(itemId){
        return this.model.deleteOne({_id: itemId}) 
    }
}

