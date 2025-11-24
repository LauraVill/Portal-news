module.exports.principais_noticias = function (app, req, res) {
    const connection = app.config.dbconnection();
    var noticiaModel = new app.app.models.mancheteModels(connection);
    noticiaModel.getTodasAsNoticias(connection, function (error, result) {
        res.render('../views/noticias/principaisNoticias', { Jnoticias: result, flagAdmin: req.session.autorizado })
    })
}
