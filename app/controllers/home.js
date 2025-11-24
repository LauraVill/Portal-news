module.exports.index = function (app, req, res) {
    var connection = app.config.dbconnection();
    var noticiasModel = new app.app.models.mancheteModels(connection);
    noticiasModel.getHome(connection, function (error, result) {
        res.render('home/index', { noticias: result, flagAdmin: req.session.autorizado });
    })
}
