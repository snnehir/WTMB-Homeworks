const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    password:{
        type: String,
        required: true,
        minlength: 4
    },
    movies: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Movie',
        autopopulate: {
            maxDepth: 1
        }
    }]
})


CustomerSchema.plugin(require('mongoose-autopopulate'))

const CustomerModel = mongoose.model('Customer', CustomerSchema)

module.exports = CustomerModel
