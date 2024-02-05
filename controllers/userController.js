const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
  try {
    const { name, username, dob, password } = req.body;
    const userId = await userService.registerUser(name, username, dob, password);
    res.json({ userId });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message || 'Bad Request' });
  }
};