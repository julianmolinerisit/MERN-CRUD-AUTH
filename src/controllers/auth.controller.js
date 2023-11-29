import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';  // Change this line to import 'jsonwebtoken'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new User instance with the hashed password
    const newUser = new User({
      username,
      email,
      password: passwordHash,  // Save the hashed password
    });

    // Save the new user to the database
    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    // Send a response after successfully registering the user
    res.send({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      token,  // Include the token in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message : error.message });
  }
};

export const login = (req, res) => {
  res.send('login');
};
