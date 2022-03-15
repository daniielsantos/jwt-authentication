const postsControlador = require('./posts-controlador');
const passport = require('passport');
const middlewaresAutenticacao = require('../usuarios/middlewares-autenticacao');

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(middlewaresAutenticacao.bearer, postsControlador.adiciona);
};
