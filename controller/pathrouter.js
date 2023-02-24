const { Router } = require('express');

const pathRouter = new Router();

pathRouter.get('/', async (req, res) => {
  res.render('home');
});

pathRouter.get('/login', async (req, res) => {
  res.render('login');
})

pathRouter.get('/signup', async (req, res) => {
  res.render('signup');
})

pathRouter.get('/nav', async (req, res) => {
  res.render('nav');
})

module.exports = pathRouter;