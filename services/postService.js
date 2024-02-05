const db = require('../db/db');

exports.createPost = async (title, body, userId) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)';
    db.query(query, [title, body, userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.getAllPosts = async (userId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM posts WHERE userId = ? and status = 1';
    db.query(query, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
