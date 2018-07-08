'use strict';

module.exports = (app) => {

	var cadEmpresa = require('../controllers/EmpresaControllers');

	app.route('/empresa')
		.get(cadEmpresa.lista_empresa)
		.post(cadEmpresa.criar_empresa);

	app.route('/empresa/:empresaId')
		.get(cadEmpresa.ler_empresa)
		.put(cadEmpresa.update_empresa)
		.delete(cadEmpresa.delete_empresa);
};