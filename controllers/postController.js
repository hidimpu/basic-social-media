const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const postId = await postService.createPost(title, body, userId);
    res.json({ postId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const { userId } = req.body;
    const posts = await postService.getAllPosts(userId);
    res.json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
