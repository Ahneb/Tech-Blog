const { Router } = require('express');

const userRouter = new Router();

userRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  
});

module.exports = userRouter;