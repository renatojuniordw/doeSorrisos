'use strict';

var bd = require('mongoose');
var CadUsuario = bd.Schema;

var Usuario = new CadUsuario({
  'NM_USUARIO': {
    PRIMEIRO_NM: {
      type: String
    },
    SEGUNDO_NM: {
      type: String
    },
  },
  'CONTATO_USUARIO': {
    TELEFONE: String,
    CELULAR: {
      type: String
    },
  },
  'CREDENCIAIS_USUARIO': {
    EMAIL: {
      type: String,
      unique: true
    },
    SENHA: {
      type: String,
    },
  },
  'DT_CADASTRO': {
    type: Date,
    default: Date.now
  }
});

module.exports = bd.model('Usuarios', Usuario);