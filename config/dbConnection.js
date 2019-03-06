// trazer o módulo de MySQL
var mysql = require('mysql');

var connMySQL = function() {
    console.log('Conexao com BD estabelecida')
     // esatabelecer a conexao com o banco
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}
module.exports = function() {
	console.log('O autoload carregou o modulo de conexão com o BD')
	return connMySQL;
}