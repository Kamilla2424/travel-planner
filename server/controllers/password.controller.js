const { sendResetEmail, changePassword } = require('../models/password.model');

function sendPasswordResetEmail(req, res) {
    const { username, email } = req.body;
    sendResetEmail(username, email)
        .then(() => {
            res.status(200).send({ message: 'Password reset email sent successfully' });
        })
        .catch((err) => {
            console.log(err, 'error sending password reset email');
            res.status(500).send({ error: 'Internal Server Error' });
        });
};

function resetPassword(req, res) {
    const { userId, token } = req.params;
    const { newPassword } = req.body;
    changePassword(userId, token, newPassword)
        .then(() => {
            res.status(200).send({ message: 'Password reset successfully' });
        })
        .catch((err) => {
            console.log(err, 'error resetting password');
            res.status(500).send({ error: 'Internal Server Error' });
        });
};

module.exports = { sendPasswordResetEmail, resetPassword };