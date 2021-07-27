const BaseService = require('./base-service')
const MovieModel = require('../modules/movie')

class MovieService extends BaseService {
    constructor() {
        super(MovieModel, `${__dirname}/../movie-db.json`)
    }
}

module.exports = new MovieService()