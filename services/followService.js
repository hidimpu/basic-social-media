const db = require('../db/db');

exports.followUser = async (followerUserId, followingUserId,action) => {
  let statusKey = 0
  if (action == 'F') {
    statusKey = 1
  }
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO followers (followerUserId, followingUserId) VALUES (?, ?) ON DUPLICATE KEY UPDATE status = ?';
    db.query(query, [followerUserId, followingUserId, statusKey], (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          reject(new Error('Already Following'));
        } else {
          reject(err);
        }
      } else {
        resolve(results);
      }
    });
  });
};
