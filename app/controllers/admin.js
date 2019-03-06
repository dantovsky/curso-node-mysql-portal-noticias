module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: null,
        noticia: {}
    });
}

module.exports.noticias_salvar = function(application, req, res) {
    var noticia = req.body;

    // validar os campos
    req.assert('titulo', 'O campo "título" é obrigatório').notEmpty(); // atributo name do campo, mensagem do porque não foi validado
    req.assert('resumo', 'O campo "resumo" é obrigatório').notEmpty();
    req.assert('resumo', 'O campo "resumo" deve conter entre 10 e 100 caracteres.').len(10, 100);
    req.assert('autor', 'O campo "nome" do autor é obrigatório').notEmpty();
    // A funcao isDate deixou de existir.
    // req.assert('data_noticia', 'A data é obrigatório').notEmpty().isValidDate({
    //     format: 'YYYY-MM-DD'
    // });
    req.assert('noticia', 'O campo "notícia" é obrigatória').notEmpty();

    // Solucao do colega Victor Costa da Conceição para validar a data (v´dieo 44)
    function isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }
    req.assert('data_noticia').custom(isValidDate).withMessage('A data é inválida');

    // Casso algum campo não atenda ao critério de validação, a propriedade validationErrors() do REQUEST recebe o valor de TRUE.
    var erros = req.validationErrors();
    console.log(erros)

    if (erros) {
        res.render("admin/form_add_noticia", {
            validacao: erros,
            noticia: noticia
        }); // retorna para o form e envia o JSON com as infos dos erros, como param
        return; // retorna vazio, para que o processo seguinte não seja executado. 
    }

    // ------------------------------------------------------
    // Salvar Registo na BD
    // ------------------------------------------------------

    // Passos ::
    // - recuperar a conexao
    // - recuperar o model
    // - enviar para uma funcao de salvar
    // - implementar uma funcao de callback para retornar para a tela que lista as notícias

    var connection = application.config.dbConnection(); //dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect("/noticias");
        console.log('Registo inserido na BD')
            // res.render("noticias/noticias", {
            //     noticias: result
            // });
    });
}