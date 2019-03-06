var express = require('express'); // desta forma, já executaria tambem a funcão: var express = require('express')();
var consign = require('consign'); // faz o autoload das rotas e outros arquivos 
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); // recuperamos a biblioteca Express e executamos a funcao que o módulo do Express retorna

// informar para o Express que o engine de views do Express passou a ser o módulo EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// (aula 51) Uso da funcao "static" do Express, ela funciona como um meddleaware, uqe identifica um dir com infos estáticos, e permite que os arquivos deste dir seja, acessado a partir da raiz da aplicação 
app.use(express.static('./app/public'));

// Body Parser
//  Como vamos incluir como um meeedlaware, precisamos parametrizar como ele vai tratar os forms.
// Precisamos passar um param para a funcao urlEnconded para que ela entenda como tem que se comportar a tratativa de forms dentro da app
app.use(bodyParser.urlencoded({
    extended: true
}));

// Express Validator
app.use(expressValidator());

// o consign irá reconhecer todos os arquivos da pasta routes e inclui esses módulos dentro de app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
// o consign já executa o que o módulo exporta, neste caso, ele executaria aqui e novamente ao exportar o módulo, criando assim um loop de criação de servidores (o que é um problema).
// para evitar isso, adicionamos o caminho completo onde se encontra o arquivo de conexão com o BD (config/dbConnection.js).
// é necessário também alterar o arquivo de conexão com o BD, para que não execute também quando não necessitamos da BD. Precisa criar uma var e retornar essa var, e não mais o retorno de todo o módulo.

// exportar estes módulo
module.exports = app;