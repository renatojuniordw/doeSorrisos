'use strict'

var bd = require('mongoose');
var Instituicao = bd.model('Instituicoes');

exports.lista_instituicao = (req, res) => {

	Instituicao.find({}, (err, instituicao) => {
		if (err) {
			res.send(err);
		}
		res.json(instituicao);
	});

};

exports.criar_instituicao = (req, res) => {
	
	var cad_instituicao = new Instituicao(req.body);

	cad_instituicao.save((err, instituicao) => {
		if (err) {
			res.send(err);
		}
		res.json(instituicao);
	});

};

exports.ler_instituicao = (req, res) => {
	
	Instituicao.findById(req.params.instituicaoId, (err, instituicao) => {
		if (err) {
			res.send(err);
		}
		res.json(instituicao)
	});

};

exports.update_instituicao = (req, res) => {
	
	Instituicao.findOneAndUpdate({
		_id: req.params.instituicaoId
	},
		req.body,
		{
			new: true
		}
		, (err, instituicao) => {
			if (err) {
				res.send(err);
			}
			res.json(instituicao)
	});

};

exports.delete_instituicao = (req, res) => {
	
	Instituicao.remove({
		_id: req.params.instituicaoId
	}, (err, instituicao) => {
		if (err) {
			res.send(err)
		}
		res.json({ message: 'Instituição deletada com sucesso' });
	});

};