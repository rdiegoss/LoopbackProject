'use strict';

var Customer = require('../../common/models/customer');

module.exports = function(app) {
  var router = app.loopback.Router();
  app.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var cpf = req.body.password;

    Customer.login({
      email: email,
      cpf: cpf,
      password: password
    }, 'user', function(err, token) {
      if (err)
        return res.render('index', {
          email: email,
          password: password,
          loginFailed: true
        });

      token = token.toJSON();

      res.render('customer', {
        name: token.user.username,
        accessToken: token.id
      });
    });
  });
  app.use(router);
};
