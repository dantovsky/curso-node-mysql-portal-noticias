module.exports.index = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result) {
        //console.log(result)
        // console.log(result);
        // usamos o método send() por estar trabalhando com Express
        // mas ao instalar e setar o EJS como o view engine, passamos a usar o render()
        res.render("home/index", {
            noticias: result
        });
    });
}