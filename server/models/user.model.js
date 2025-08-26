const connect = require("../database/connection.js");
const mongoose = require('mongoose');
const User = require("../mongoose-models/user.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(userData) {
    await connect();
    const takenUsername = await User.findOne({username: userData.username});
    const takenEmail = await User.findOne({email: userData.email});

    if(takenUsername) {
      mongoose.disconnect();
      throw new Error('Username already taken');
    } else if(takenEmail) {
      mongoose.disconnect();
      throw new Error('Email already taken');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    if(!hashedPassword) {
      mongoose.disconnect();
      throw new Error('Error hashing password');
    }

    const newBody = {
      id: Math.random().toString(16).slice(2),  
      username: userData.username,
      email: userData.email,
      password: hashedPassword
    };

    const newUser = new User(newBody);
    await newUser.save();
    mongoose.disconnect();
    return newBody;
}

async function checkUser(userData) {
    try {
        await connect();
        const user = await User.findOne({ username: userData.username });

        if(!user){
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(userData.password, user.password);

        if(!isMatch) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return {user, token};

    } finally {
        await mongoose.disconnect();
    }
}

module.exports = { registerUser, checkUser };