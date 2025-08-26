const Trip = require('../mongoose-models/trip.js');

async function addTrip(tripData, userId) {
    try {
        const trip = new Trip({...tripData, userId: userId});
        return await trip.save();
    } catch (err) {
        console.log('Error adding trip:', err);
        throw err;
    }
}

async function getAllTrips() {
    try {
        return await Trip.find({});
    } catch (err) {
        console.log('Error fetching trips:', err);
        throw err;
    }
}         

async function alterTrip(tripId, updatedData) {
    try {
        const trip = await Trip.findById(tripId);
        if (!trip) {
            throw new Error('Trip not found');
        }
        Object.assign(trip, updatedData);
        return await trip.save();

    } catch (err) {
        console.log('Error updating trip:', err);
        throw err;
    }
}

async function removeTrip(tripId) {
    try {
        const trip = await Trip.findById(tripId);
        if (!trip) {
            throw new Error('Trip not found');
        }
        return await trip.deleteOne();

    } catch (err) {
        console.log('Error removing trip:', err);
        throw err;
    }
}

module.exports = { addTrip, getAllTrips, alterTrip, removeTrip };