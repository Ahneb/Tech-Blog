const { Router } = require('express');

const pathRouter = require('./pathrouter');
const apiRouter = require('./apis');

const mainRouter = new Router();

mainRouter.use('/', pathRouter);
mainRouter.use('/api', apiRouter);

module.exports = mainRouter;