'use strict';

module.exports = (app) => {
    
    var cadUsuario = require('../controllers/UsuarioControllers');

    app.route('/usuario')
        .get(cadUsuario.lista_usuario)
        .post(cadUsuario.criar_usuario);

    app.route('/usuario/:usuarioId')
        .get(cadUsuario.ler_usuario)
        .put(cadUsuario.update_usuario)
        .delete(cadUsuario.delete_usuario);

    var cadInstituicao = require('../controllers/InstituicaoControllers');

    app.route('/instituicao')
        .get(cadInstituicao.lista_instituicao)
        .post(cadInstituicao.criar_instituicao);

    app.route('/instituicao/:instituicaoId')
        .get(cadInstituicao.ler_instituicao)
        .put(cadInstituicao.update_instituicao)
        .delete(cadInstituicao.delete_instituicao);

    var cadEmpresa = require('../controllers/EmpresaControllers');

    app.route('/empresa')
        .get(cadEmpresa.lista_empresa)
        .post(cadEmpresa.criar_empresa);

    app.route('/empresa/:empresaId')
        .get(cadEmpresa.ler_empresa)
        .put(cadEmpresa.update_empresa)
        .delete(cadEmpresa.delete_empresa);

    var cadBrinquedo = require('../controllers/BrinquedoControllers');

    app.route('/brinquedo')
        .get(cadBrinquedo.lista_brinquedo)
        .post(cadBrinquedo.criar_brinquedo);

    app.route('/brinquedo/:brinquedoId')
        .get(cadBrinquedo.ler_brinquedo)
        .put(cadBrinquedo.update_brinquedo)
        .delete(cadBrinquedo.delete_brinquedo);

};

// É aqui que eu tenho que controlar as páginas que só podem se acessaadas do com sessão