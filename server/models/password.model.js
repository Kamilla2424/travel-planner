const User = require('../mongoose-models/user');
const mongoose = require('mongoose');
const Token = require('../mongoose-models/token');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcryptjs');


async function sendResetEmail(username, email) {
    try{
        const user = await User.findOne({ username, email });
        if (!user) {
            mongoose.disconnect();
            throw new Error('User not found');
        }

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = new Token({ userId: user._id, token: Math.random().toString(36).substring(2) });
            await token.save();
        }

        const resetLink = `${process.env.DATABASE_URI}/password-reset/${user._id}/${token.token}`;
        await sendEmail.sendEmail(email, 'Password Reset', `Click the link to reset your password: ${resetLink}`);

        console.log('Password reset email sent successfully');

    } catch(err) {
        console.log(err, "error sending password reset email");
        mongoose.disconnect();  
    }
}

async function changePassword(userId, token, newPassword) {
    try{    
        const user = await User.findById(userId);
        if (!user) {
            mongoose.disconnect();
            throw new Error('User not found');
        }

        let findToken = await Token.findOne({ userId: user._id, token });
        if (!findToken) {
            mongoose.disconnect();
            throw new Error('Invalid token');
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();
        await findToken.deleteOne();
        console.log('Password reset successfully');
    
    } catch(err) {
        console.log(err, "error resetting password");
        mongoose.disconnect();
    }
}

module.exports = { sendResetEmail, changePassword };