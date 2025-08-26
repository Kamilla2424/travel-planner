const User = require('../mongoose-models/user.js');
const { registerUser, checkUser } = require('../models/user.model');

function postUser(req, res) {
    registerUser(req.body)
        .then((user) => {
            res.status(201).send({ user })
        })
        .catch((err) => {
            console.log(err);
        })
}

function loginUser(req, res) {
    checkUser(req.body)
        .then((user) => {
            if (user) {
                res.status(200).send({ user });
            }    
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
}

async function getUsers(req,res) {
    try{
        const users = await User.find({});
        res.status(200).send({ users })
    }
    catch(err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

module.exports = { postUser, getUsers, loginUser };