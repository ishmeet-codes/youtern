const { v4: uuidv4 } = require('uuid');
const { users } = require('../utils/storage');

// Signup logic
exports.signup = (req, res) => {
  const { username, password, role } = req.body;
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const newUser = { id: uuidv4(), username, password, role };
  users.push(newUser);
  res.status(201).json({ message: 'User signed up successfully' });
};

// Login logic
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ message: 'Login successful', user });
};
