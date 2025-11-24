module.exports = function(app){
    app.get('/noticias', function(req,res){
        app.app.controllers.principais_noticias.principais_noticias(app,req,res);
    });

    app.get('/noticia/:id', function(req,res){
        app.app.controllers.noticia.noticia(app,req,res);
    });

    app.get('/principaisnoticias', function(req,res){
        app.app.controllers.principais_noticias.principais_noticias(app,req,res);
    });
}