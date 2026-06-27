import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";



// GENERATE TOKEN
const generateToken = (id) => {

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

};



// REGISTER USER
export const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // CHECK USER
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // RESPONSE
    res.status(201).json({
      success: true,
      token: generateToken(user._id),

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// LOGIN USER
export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // RESPONSE
    res.json({
      success: true,

      token: generateToken(user._id),

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
export const getMe = async (req, res) => {

  res.json({
    success: true,
    user: req.user,
  });

};


