const BaseService = require('./base-service')
const CustomerModel = require('../models/customer')

class CutomerService extends BaseService {
    model = CustomerModel
}

module.exports = new CutomerService()
