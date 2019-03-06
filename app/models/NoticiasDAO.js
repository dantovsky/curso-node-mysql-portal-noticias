function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    // a funcao query especa 2 params: um SQL e uma funcao de callback (a funcao de callback espera dois params: erro e resultado)
    this._connection.query('select * from noticias ORDER BY data_noticia DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function(param_id, callback) {
	console.log(param_id)
    this._connection.query('select * from noticias where id_noticia = ' + param_id.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._connection.query('insert into noticias set ? ', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias ORDER BY data_noticia DESC limit 5', callback)
}

module.exports = function() {
    return NoticiasDAO;
}
// DAO => Object Access Data