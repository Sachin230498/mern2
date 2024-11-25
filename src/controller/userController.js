import express from "express";
import User_model from "../model/usermodel.js"

import bcrypt from "bcrypt";

const GetData = (req, res) => {
  res.send("getting it");

//   console.log(process.env.JWT_SECRET);
};

// Register User
const register = async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(String(password), salt);
    const user = new User_model({
      username,
      password: hashedPass,
      mobile,
      email,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User_model.findOne({ username });
    if (!user || !(await bcrypt.compare(String(password), user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ massager: "user login", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { register, login, GetData };



// 44YgpREaEOGxIXRY
// sachinpathe230498


// mongodb+srv://sachinpathe230498:44YgpREaEOGxIXRY@cluster0.hn0hv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0