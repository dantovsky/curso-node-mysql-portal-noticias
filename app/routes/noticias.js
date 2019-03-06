// var dbConnection = require('../../config/dbConnection');
// OBS: os controllers já estão sendo carregados automaticamente pelo autoload do Consign

module.exports = function(application) {

    application.get('/noticias', function(req, res) {
        application.app.controllers.noticias.noticias(application, req, res);
    });

    application.get('/noticia', function(req, res) {
        application.app.controllers.noticias.noticia(application, req, res);
    });
}