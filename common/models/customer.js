'use strict';

var CustomerValidation = require('./validations/customer');

module.exports = function(Customer) {
    CustomerValidation(Customer);
};
