const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    age: {
        type: String,
        required: true,
        min: 7,
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        autopopulate: true  
    }]
})
CustomerSchema.plugin(require('mongoose-autopopulate'));
const CustomerModel = mongoose.model("Customer", CustomerSchema)
module.exports = CustomerModel