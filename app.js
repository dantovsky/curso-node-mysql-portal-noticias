var express = require('express'); // desta forma, já executaria tambem a funcão: var express = require('express')();
var app = express(); // recuperamos a biblioteca Express e executamos a funcao que o módulo do Express retorna

var msg = require('./mod_teste');

// informar para o Express que o engine de views do Express passou a ser o módulo EJS
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	// usamos o método send() por estar trabalhando com Express
	// mas ao instalar e setar o EJS como o view engine, passamos a usar o render()
	res.render("home/index")
});

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req, res){
	res.render("noticias/noticias")
});

// Com Node puro, fizemos a chamada do createServer :: var server = http.createServer(...)...
// No caso do Express precisamos apenas chamar o método listen() :: método que já fica escutando requisições em determinada porta, e passamos uma função de callback
app.listen(3000, function(){
	console.log("Servidor rodando com Express")
	console.log(msg())
})