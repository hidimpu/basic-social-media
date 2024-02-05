// controllers/followController.js
const followService = require('../services/followService');

exports.followUser = async (req, res) => {
  try {
    const { followerUserId, followingUserId, action } = req.body;
    await followService.followUser(followerUserId, followingUserId, action);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
