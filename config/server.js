var express = require('express');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var appServer = express();
const consign = require('consign');
const bodyparser = require('body-parser')
const validator = require('express-validator')
const session = require('express-session');
appServer.set('view engine', 'ejs')
appServer.set('views', './app/views')
appServer.use(express.static('./app/public'))
appServer.use(bodyparser.urlencoded({ extended: true }))
appServer.use(expressValidator());
appServer.use(expressSession({
  secret: 'a16g4v86vdf3',
  resave: false,
  saveUninitialized: false
}));
appServer.use(session({
  secret: 'uma_chave_secreta',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));
appServer.use(validator())
consign()
  .then('./config/dbconnection.js')
  .then('app/models')
  .then('app/controllers')
  .then('app/routes')
  .into(appServer);
module.exports = appServer;

