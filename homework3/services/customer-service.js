const BaseService = require('./base-service')
const CustomerModel = require('../modules/customer')

class CustomerService extends BaseService {
    constructor() {
        super(CustomerModel, `${__dirname}/../customer-db.json`)
    }
}

module.exports = new CustomerService()
