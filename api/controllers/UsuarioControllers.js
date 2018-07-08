'use strict'

var bd = require('mongoose');
var Usuario = bd.model('Usuarios');

exports.lista_usuario = (req, res) => {

	Usuario.find({}, (err, usuario) => {
		if (err) {
			res.send(err);
		} else {
			res.json(usuario)
		};
	});

};

exports.criar_usuario = (req, res) => {
	
	var cad_usuario = new Usuario(req.body);
	
	cad_usuario.save((err, usuario) => {
		if (err) {
			res.send(err);
		} else {
			res.json(usuario)
		};
	});

};

exports.ler_usuario = (req, res) => {
	
	Usuario.findById(req.params.usuarioId, (err, usuario) => {
		if (err) {
			res.send(err);
		} else {
			res.json(usuario)
		}
	});

};

exports.update_usuario = (req, res) => {
	
	Usuario.findOneAndUpdate({
		_id: req.params.usuarioId
	},
		req.body,
		{
			new: true
		}
		, (err, usuario) => {
			if (err) {
				res.send(err);
			} else {
				res.json(usuario)
			}
	});

};

exports.delete_usuario = (req, res) => {
	Usuario.remove({
		_id: req.params.usuarioId
	}, (err, usuario) => {
		if (err) {
			res.send(err)
		} else {
			res.json({ message: 'Usuário deletado com sucesso' });
		}
	});
};