import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('pass1234', 10),
    isAdmin: true,
  },
  {
    name: 'Ben Limo',
    email: 'ben@example.com',
    password: bcrypt.hashSync('pass1234', 10),
  },
  {
    name: 'test user',
    email: 'test@example.com',
    password: bcrypt.hashSync('pass1234', 10),
  },
];

export default users;
