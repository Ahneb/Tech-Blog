const { Router } = require('express');

const { User } = require('../../models');

const userRouter = new Router();

userRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({
    where: {
      email,
    },
  });

  if (existingUser) {
    res.status(409).end();
  };

  const newUser = await User.create({
    email,
    password,
  });

  res.status(200).json({
    id: newUser.id,
  });
});

module.exports = userRouter;