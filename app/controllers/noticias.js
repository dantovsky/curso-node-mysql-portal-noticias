module.exports.noticias = function(application, req, res) {
    var connection = application.config.dbConnection(); //dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {

        // renderizar uma página enviando também o resultado (dados) // res.send(result); // serve para mandar o resultado cru para a página
        res.render("noticias/noticias", {
            noticias: result
        });
    });
    //res.render("noticias/noticias")dbConnection 
}

module.exports.noticia = function(application, req, res) {
    var connection = application.config.dbConnection(); //dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    var param_id = req.query;

    // a funcao query especa 2 params: um SQL e uma funcao de callback (a funcao de callback espera dois params: erro e resultado)
    noticiasModel.getNoticia(param_id, function(error, result) {
        //res.send(result); // mandar o resultado cru para a página
        // renderizar uma página enviando também o resultado (dados)
        res.render("noticias/noticia", {
            noticia: result
        });
    });

    //res.render("noticias/noticias")
}