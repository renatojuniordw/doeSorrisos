'use strict';

var bd = require('mongoose');
var CadEmpresa = bd.Schema;

var empresa = new CadEmpresa({
    'NM_EMPRESA': {
        type: String,
        unique: true
    },
    'CNPJ': {
        type: String,
        unique: true
    },
    'ENDERECO_PJ': {
        RUA: String,
        BAIRRO: String,
        CIDADE: String,
        ESTADO: String,
        N_ENDERECO: {
            type: Number
        },
        CEP: {
            type: Number
        },
        COMPLEMENTO: {
            type: String
        },
    },
    'CONTATOS_PJ': {
        TELEFONE: {
            type: String,
            unique: true
        },
        CELULAR: {
            type: String,
            unique: true
        },
        SITE: {
            type: String,
            unique: true
        },
    },
    'SN_TERMO_PJ': {
        type: String
    },
    'REDES_SOCIAL_PJ': {
        FACEBOOK: {
            type: String,
            unique: true
        },
        INSTAGRAM: {
            type: String,
            unique: true
        },
    },
    'CREDENCIAIS_PJ': {
        EMAIL: {
            type: String, 
            unique: true
        },
        SENHA: {
            type: String
        },
    },
    'DT_CADASTRO': {
        type: Date,
        default: Date.now
    }
});

module.exports = bd.model('Empresas', empresa);