const { Router } = require('express');

const userRouter = require('./user');
const postsRouter = require('./posts');

const apiRouter = new Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;