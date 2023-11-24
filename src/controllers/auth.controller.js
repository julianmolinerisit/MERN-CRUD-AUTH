import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    await bcrypt.hash(password, 10)

    // Create a new User instance
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a response after successfully registering the user
    res.send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const login = (req, res) => {
  res.send("login");
};
