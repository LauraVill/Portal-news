module.exports = function (app) {
    app.get('/tecnologia', function (req, res) {
        res.render('session/tecnologia')
    })
}