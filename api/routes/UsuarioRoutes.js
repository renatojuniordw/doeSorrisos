'use strict';

module.exports = (app) => {

	var cadUsuario = require('../controllers/UsuarioControllers')

	app.route('/usuario')
		.get(cadUsuario.lista_usuario).pretty()
		.post(cadUsuario.criar_usuario);

	app.route('/usuario/:usuarioId')
		.get(cadUsuario.ler_usuario)
		.put(cadUsuario.update_usuario)
		.delete(cadUsuario.delete_usuario);
};