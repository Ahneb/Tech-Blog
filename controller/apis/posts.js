const { Router } = require('express');

const auth = require('../../middleware/auth');
const Posts = require('../../models/posts');
const User = require('../../models/user');

const postsRouter = new Router();

postsRouter.post('/', auth, async (req, res) => {
  const { title, text } = req.body;

  console.log(req.body);

  const newPost = await Posts.create({
    title,
    text,
    UserId: req.user_id,
  });

  res.status(200).json({
    id: newPost.id,
  });
});

postsRouter.get('/foruser', auth, async  (req, res) => {
  const posts = await Posts.findAll( { 
    where: {
      UserId: req.user_id,
    },
    include: User,
    order: [['updatedAt', 'DESC']],
  });

  const plainPosts = posts.map((post) => post.get({ plain: true }));
  res.status(200).json(plainPosts);
});

postsRouter.get('/allposts', async (req, res) => {
  const posts = await Posts.findAll({
    include: User,
    order: [['updatedAt', 'DESC']],
  });

  const plainPosts = posts.map((post) => post.get({ plain: true }));
  res.status(200).json(plainPosts);
});

postsRouter.delete('/', async (req, res) => {
  console.log('we hit delete');
  console.log(req.body.id);
  Posts.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send('deleted a post');
  });
});

module.exports = postsRouter;