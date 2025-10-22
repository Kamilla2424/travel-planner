const { getUsers, postUser, loginUser } = require('./controllers/user.controller');
const { sendPasswordResetEmail, resetPassword } = require('./controllers/password.controller');
const { createTrip, getTrips, updateTrip, deleteTrip } = require('./controllers/trip.controller');
const auth = require('./utils/auth.js');
const connect = require('./database/connection.js');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(express.json());

connect();

app.post('/api/register', postUser);

app.post('/api/login', loginUser);

app.get('/api/users', auth, getUsers);

app.post('/api/password-reset', sendPasswordResetEmail);

app.post('/api/password-reset/:userId/:token', resetPassword);

app.post('/api/trips', auth, createTrip);

app.get('/api/trips', auth, getTrips);

app.put('/api/trips/:tripId', auth, updateTrip);

app.delete('/api/trips/:tripId', auth, deleteTrip);

app.listen(9090, () => {
    console.log('Server is running on port 9090');
});