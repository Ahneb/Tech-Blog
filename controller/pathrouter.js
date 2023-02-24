const { Router } = require('express');

const pathRouter = new Router();

pathRouter.get('/', async (req, res) => {
  res.render('home');
});


pathRouter.get('/nav', async (req, res) => {
  res.render('nav');
})

module.exports = pathRouter;