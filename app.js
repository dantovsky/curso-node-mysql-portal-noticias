// importação do arquivo server.js
var app = require('./config/server');

// Com Node puro, fizemos a chamada do createServer :: var server = http.createServer(...)...
// No caso do Express precisamos apenas chamar o método listen() :: método que já fica escutando requisições em determinada porta, e passamos uma função de callback
app.listen(3000, function(){
	console.log("Servidor ON :: rodando com Express")
})