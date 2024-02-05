const bcrypt = require('bcrypt');
const db = require('../db/db');

const saltRounds = 10; // Number of salt rounds for bcrypt

exports.registerUser = async (name, username, dob, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Hash 
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const comp = await bcrypt.compare(password,hashedPassword)

      console.log(comp)
      

      const query = 'INSERT INTO users (name, username, dob, password) VALUES (?, ?, ?, ?)';
      db.query(query, [name, username, dob, hashedPassword], (err, results) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            reject(new Error('Username already exists'));
          } else {
            reject(err);
          }
        } else {
          resolve(results.insertId);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
