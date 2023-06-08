const { Router } = require('express');
const EstController = require('./controllers/EstController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const SearchController = require('./controllers/SearchController');
const ProfileEstaController = require('./controllers/ProfileEstaController');
const LoginEstabelecimentoController = require('./controllers/LoginEstabelecimentoController');
const UsuarioController = require('./controllers/UsuarioController');
const HistoricoController = require('./controllers/HistoricoController');

const routes = Router();

routes.get('/estabelecimentos', EstController.index);
routes.post('/estabelecimentos', EstController.store);

routes.post('/cadastrarEstabelecimento', EstabelecimentoController.store);

routes.post('/usuario', UsuarioController.store);
routes.get('/loginUsuario', UsuarioController.index);
routes.get('/buscarUser', UsuarioController.indexBuscarUser);

routes.post('/historico', HistoricoController.store);
routes.get('/historico', HistoricoController.index)

routes.get('/search', SearchController.index)
routes.get('/LoginEstabelecimento', LoginEstabelecimentoController.index)
routes.get('/profile', ProfileEstaController.index)

module.exports = routes;
