const { Router } = require('express');

const auth = require('../../middleware/auth');
const Posts = require('../../models/Posts');

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
  });

  const plainPosts = posts.map((post) => post.get({ plain: true }));
  res.status(200).json(plainPosts);
})

module.exports = postsRouter;