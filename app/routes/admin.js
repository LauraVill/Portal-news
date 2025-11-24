module.exports = function (app) {
     app.get('/add', function (req, res) {
          res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
     })

     app.post('/noticias/salvar', function (req, res) {
          app.app.controllers.admin.noticias_salvar(app, req, res);
     })
}