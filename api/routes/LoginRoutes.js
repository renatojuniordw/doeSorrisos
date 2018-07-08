'use strict';

module.exports = (app) => {

	var checkUsuario = require('../controllers/LoginControllers')

	app.route('/login').post(checkUsuario.login);
	app.route('/logout').post(checkUsuario.logout);

};