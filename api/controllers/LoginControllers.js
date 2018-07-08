'use strict';


var Usuario = bd.model('Usuarios');

exports.login = (req, res) => {
	
	usuario = {CREDENCIAIS_USUARIO.email: req.CREDENCIAIS.EMAIL, CREDENCIAIS_USUARIO.senha: req.CREDENCIAIS.SENHA};

	Usuario.find(usuario, (err, usuario) => {
		if (err) {
			res.send(err);
		} else {
			res.json(usuario)
		};
	});

};