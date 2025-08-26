const { addTrip, alterTrip, removeTrip, getAllTrips } = require('../models/trip.model.js');

async function createTrip(req, res) {
    try {
        const tripData = req.body;
        const userId = req.user.id;

        const trip = await addTrip(tripData, userId);
        
        res.status(201).send(trip);
    } catch(err) {
        console.log(err, 'error creating trip');
        res.status(500).send({ error: 'Internal Server Error' });
    };
}

function getTrips(req, res) {
    getAllTrips()
        .then((trips) => {
            res.status(200).send(trips);
        })
        .catch((err) => {
            console.log(err, 'error fetching trips');
            res.status(500).send({ error: 'Internal Server Error' });
    })
}

function updateTrip(req, res) {
    const { tripId } = req.params;
    const updatedData = req.body;
    alterTrip(tripId, updatedData)
        .then((trip) => {
            res.status(200).send(trip);
        })
        .catch((err) => {
            console.log(err, 'error updating trip');
            res.status(500).send({ error: 'Internal Server Error' });
    })
}

function deleteTrip(req, res) {
    const { tripId } = req.params;
    removeTrip(tripId)
        .then(() => {
            res.status(200).send({ message: 'Trip deleted successfully' });
        })
        .catch((err) => {
            console.log(err, 'error deleting trip');
            res.status(500).send({ error: 'Internal Server Error' });
    })
}

module.exports = { createTrip, getTrips, updateTrip, deleteTrip };