'use strict';

var bd = require('mongoose');
var Brinquedo = bd.model('Brinquedos');

exports.lista_brinquedo = (req, res) => {

    Brinquedo.find({}, (err, brinquedo) => {
        if (err) {
            res.send(err);
        } else {
            res.json(brinquedo);
        }
    });

};

exports.criar_brinquedo = (req, res) => {

    var cad_brinquedo = new Brinquedo(req.body);

    cad_brinquedo.save((err, brinquedo) => {
        if (err) {
            res.send(err)
        } else {
            res.json(brinquedo)
        }
    });

};

exports.ler_brinquedo = (req, res) => {
    
    Brinquedo.findById(req.params.brinquedoId, (err, brinquedo) => {
        if (err) {
            res.send(err);
        } else {
            res.json(brinquedo);
        }
    });

};

exports.update_brinquedo = (req, res) => {
    
    Brinquedo.findOneAndUpdate({
        _id: req.params.brinquedoId
    },
        req.body, {
            new: true
        }, (err, empresa) => {
            if (err) {
                res.send(err);
            } else {
                res.json(brinquedo)
            }
        }
    );

};

exports.delete_brinquedo = (req, res) => {
    
    Brinquedo.remove({
        id: req.params.brinquedoId
    }, (err, brinquedo) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Brinquedo removido com sucesso' })
        }
    });

};