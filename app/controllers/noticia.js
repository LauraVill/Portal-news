module.exports.noticia = function (app, req, res) {
    const connection = app.config.dbconnection();
    var noticiaModel = new app.app.models.mancheteModels(connection);
    noticiaModel.getNoticia(id_noticia, connection, function (error, result) {
        res.render('noticias/noticia', { JNoticias: result, flagAdmin: req.session.autorizado })
    })
}