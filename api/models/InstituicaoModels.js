'use strict';

var bd = require('mongoose');
var CadInstituicao = bd.Schema;

var instituicao = new CadInstituicao({
    'DADOS_INSTITUICAO': {
        NM_INSTITUICAO: {
            type: String,
            unique: true,
        },
        CNPJ: {
            type: String,
            unique: true,
        },
        QT_CRIANCAS: Number,
    },
    'RESPONSAVEL_INSTITUICAO': {
        NM_RESPONSAVEL: String,
        CARGO: String
    },
    'ENDERECO_INSTITUICAO': {
        RUA: String,
        BAIRRO: String,
        CIDADE: String,
        ESTADO: String,
        N_ENDERECO: {
            type: Number,
        },
        CEP: {
            type: Number,
            
        },
        COMPLEMENTO: {
            type: String,
            
        }
    },
    'CONTATOS_INSTITUICAO': {
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
    'REDES_SOCIAL_INSTITUICAO': {
        FACEBOOK: {
            type: String,
            unique: true
        },
        INSTAGRAM: {
            type: String,
            unique: true
        },
    },
    'CREDENCIAIS_INSTITUICAO': {
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
        default: Date.now,
    }, 
    'AVALIACAO':{
        type: Number,
    }
});

module.exports = bd.model('Instituicoes', instituicao);