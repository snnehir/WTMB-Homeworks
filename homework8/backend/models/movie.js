const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    viewers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Customer',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

MovieSchema.plugin(require('mongoose-autopopulate'))

const MovieModel = mongoose.model('Movie', MovieSchema)

module.exports = MovieModel
