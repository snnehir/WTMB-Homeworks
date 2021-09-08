const BaseService = require('./base-service')
const MovieModel = require('../models/movie')

class MovieService extends BaseService {
    model = MovieModel
    async find_by_category(category){
        return await this.model.find({category: category})
    }
}

module.exports = new MovieService()
