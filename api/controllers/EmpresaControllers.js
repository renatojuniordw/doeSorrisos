'use strict';

var bd = require('mongoose');
var Empresa = bd.model('Empresas');

exports.lista_empresa = (req, res) => {

	Empresa.find({}, (err, empresa) => {
		if (err) {
			res.send(err);
		}
		res.json(empresa);
	});

};

exports.criar_empresa = (req, res) => {
	
	var cad_empresa = new Empresa(req.body);
	
	cad_empresa.save((err, empresa) => {
		if (err) {
			res.send(err);
		}
		res.json(empresa);
	});

};

exports.ler_empresa = (req, res) => {
	
	Empresa.findById(req.params.empresaId, (err, empresa) => {
		if (err) {
			res.send(err);
		}
		res.json(empresa)
	});

};

exports.update_empresa = (req, res) => {
	
	Empresa.findOneAndUpdate({
		_id: req.params.empresaId
	},
		req.body,
		{
			new: true
		}
		, (err, empresa) => {
			if (err) {
				res.send(err);
			}
			res.json(empresa)
	});

};

exports.delete_empresa = (req, res) => {
	
	Empresa.remove({
		_id: req.params.empresaId
	}, (err, empresa) => {
		if (err) {
			res.send(err)
		}
		res.json({ message: 'Empresa deletada com sucesso' });
	});

};