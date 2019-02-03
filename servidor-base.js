// console.log('Criando um site de notícias com NodeJS');

// ---------------------------------------------------------
// criar um script para o browser consumir dados do servidor
// ---------------------------------------------------------

// 1 - incorporar a biblioteca HTTP
// 2 - criar o server
// 3 - ficar escutando em uma porta

// require da biblioteca http
var http = require('http'); // require :: funcao JS que permite incorporar outros arquivos ao nosso arquivo corrente

// criar um server
// no Node eh comum passar funcoes como argumento
var server = http.createServer( function(req, res) { // recupera uma requisicao e fornece uma resposta

	// respondendo com um code HTML
	res.end("<html><body>Portal de Notícias</body></html>");
}); // poderia fazer }).listen(3000); e retirando o "var server"

// ficar escutando em uma porta
server.listen(3000);