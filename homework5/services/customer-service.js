const BaseService = require('./base-service')
const CustomerModel = require('../models/customer')

class CustomerService extends BaseService {
    // no need to use constructor
    model = CustomerModel
}

module.exports = new CustomerService()
