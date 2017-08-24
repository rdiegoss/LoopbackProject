'use strict';

module.exports = function(CustomerValidation) {
    delete CustomerValidation.validations.email;
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    CustomerValidation.validatesUniquenessOf('cpf', {message: 'CPF already exists'});
    CustomerValidation.validate('email', function (err) { if (!re.test(this.email) && this.email !== undefined) err(); }, {message: 'Email format is invalid'});
    CustomerValidation.validatesUniquenessOf('email', {message: 'Email already exists'});
    CustomerValidation.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
    CustomerValidation.validatesPresenceOf('cpf', 'email');
};
