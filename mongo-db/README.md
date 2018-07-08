
###########################################################
##                                                       ##  
##                      PADRÃO MONGODB                   ##
##                                                       ##  
###########################################################

# Para nomes de variáveis e Collection usar letras maiúsculas.

# Variáveis MongoDB:
* NM_<VARIAVEL>: Usar este formato para nomes;
* CD_<VARIAVEL>: Usar este formato para Códigos;

###########################################################
##                                                       ##  
##                    COMANDOS MONGODB                   ##
##                                                       ##  
###########################################################

# Criar ou usar banco
use projeto

# Para criar uma Collection:
db.createCollection('<NOME_COLLECTION>', {
<VARIAVEL>: <TIPO>,
<VARIAVEL>: <TIPO>
})

# Para inserir
db.getCollection('<NOME_COLLECTION>').insert();

# Select 
db.getCollection('<NOME_COLLECTION>').find();

###########################################################
##                                                       ##  
##                        GLOSSÁRIO                      ##
##                                                       ##  
###########################################################

NM: Nome;
CD: Código;
DT: Data;
PJ: Pessoa Juridica;
QT: Quantidade;