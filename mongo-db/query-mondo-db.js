/** COLLECTION CADASTRO INSTITUIÇÃO **/

db.createCollection('CAD_INSTITUICAO', {
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

/** COLLECTION CADASTRO USUARIO **/

db.createCollection('CAD_USUARIO', {
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
})

/* COLLECTION CADASTRO EMPRESA (PJ) */

db.createCollection('CAD_EMPRESA',{
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
})


/** CADASTRO CATEGORIA BRINQUEDOS **/

db.createCollection('CATEGORIA_BRINQUEDO', {
    NM_CATEGORIA: String,
    CD_CATEGORIA: Number
})

//or 

/* QUERY COM CATEGORIAS PRÉ DEFINIDAS, USANDO NOME E CÓDIGO.
**  CD_CATEGORIA PARA COMPARAÇÃO, CADASTRO E ASSOCIAÇÃO; 
**  NM_USUARIO, SERÁ USADO PARA MONSTRA NO FRONT-END.
*/
db.getCollection('CATEGORIA_BRINQUEDO').insert(
    {
        "NM_CATEGORIA": "ARTES E ATIVIDADES",
        "CD_CATEGORIA": 1
    }
        , {
        "NM_CATEGORIA": "BLOCOS DE MONTAR",
        "CD_CATEGORIA": 2
    }
        , {
        "NM_CATEGORIA": "BONECAS",
        "CD_CATEGORIA": 3
    }
        , {
        "NM_CATEGORIA": "BONECOS",
        "CD_CATEGORIA": 4
    }
        , {
        "NM_CATEGORIA": "BRINQUEDOS ELETRÔNICOS",
        "CD_CATEGORIA": 5
    }
        , {
        "NM_CATEGORIA": "CARRINHOS E CIA",
        "CD_CATEGORIA": 6
    }
        , {
        "NM_CATEGORIA": "FANTASIA",
        "CD_CATEGORIA": 7
    }
        , {
        "NM_CATEGORIA": "FAZ DE CONTA",
        "CD_CATEGORIA": 8
    }
        , {
        "NM_CATEGORIA": "INSTRUMENTAL MUSICAL",
        "CD_CATEGORIA": 9
    }
        , {
        "NM_CATEGORIA": "JOGOS",
        "CD_CATEGORIA": 10
    }
        , {
        "NM_CATEGORIA": "KITS DE MONTAGEM E MODELISMO",
        "CD_CATEGORIA": 11
    }
        , {
        "NM_CATEGORIA": "LANÇADORES",
        "CD_CATEGORIA": 12
    }
        , {
        "NM_CATEGORIA": "PLUSH",
        "CD_CATEGORIA": 13
    }
        , {
        "NM_CATEGORIA": "PISTA E AUTOROMAS",
        "CD_CATEGORIA": 14
    }
        , {
        "NM_CATEGORIA": "QUEBRA-CABEÇAS",
        "CD_CATEGORIA": 15
    })

/* CADASTRO BRINQUEDOS */
db.createCollection('BRINQUEDOS',{
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
})