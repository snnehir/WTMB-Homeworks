const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    category: {
        type: String,
        required: true,
        minLength: 3,
    },
    viewers: [{
        type: mongoose.Schema.Types.ObjectId, // keep ids of customers
        ref: 'Customer',
        autopopulate: true // https://www.npmjs.com/package/mongoose-autopopulate
    }]
},  { collection : 'movie' })

MovieSchema.plugin(require('mongoose-autopopulate'));
const MovieModel = mongoose.model("Movie", MovieSchema)
module.exports = MovieModel