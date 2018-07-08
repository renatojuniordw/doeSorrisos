'use strict';

module.exports = (app) => {

	var cadInstituicao = require('../controllers/InstituicaoControllers');

	app.route('/instituicao')
		.get(cadInstituicao.lista_instituicao)
		.post(cadInstituicao.criar_instituicao);

	app.route('/instituicao/:instituicaoId')
		.get(cadInstituicao.ler_instituicao)
		.put(cadInstituicao.update_instituicao)
		.delete(cadInstituicao.delete_instituicao);
};