const jwt = require('jsonwebtoken');
const { hashPassword, comparePasswords } = require('./utils');
const User = require('../models/User');

const secretKey = 'your_secret_key';

function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
}

async function authenticate(username, password) {
  try {
    const user = await User.findOne({ username });
    if (!user) return null;

    if (await comparePasswords(password, user.password)) {
      const token = generateToken(user);
      return token;
    }

    return null;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}

function logout(token) {
    delete loggedInUsers[token];
}

function validateToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

function authorize(token, role) {
  const decodedToken = validateToken(token);
  return decodedToken && decodedToken.role === role;
}

module.exports = { authenticate, logout, validateToken, authorize };
