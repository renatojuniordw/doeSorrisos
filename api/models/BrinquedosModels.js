'use strict';

var bd = require('mongoose');
var CadBrinquedos = bd.Schema;

var brinquedos = new CadBrinquedos({
    'NM_BRINQUEDO': {
        type: String
    },
    'CD_CATEGORIA': {
        type: Number
    },
    'DT_CADASTRO': {
        type: Date,
        default: Date.now
    }
});

module.exports = bd.model('Brinquedos', brinquedos);