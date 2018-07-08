var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Usuario = require('./models/UsuarioModels'),
    Empresa = require('./models/EmpresaModels'),
    Instituicao = require('./models/InstituicaoModels'),
    Brinquedo = require('./models/BrinquedosModels'),
    bodyParser = require('body-parser');

app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/www/index.html"));
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/projeto');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/Routes');
routes(app);

app.listen(port);

console.log('Servidor funcionando na porta: ' + port);