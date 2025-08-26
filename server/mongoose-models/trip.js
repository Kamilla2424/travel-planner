const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    notes: { type: String }
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;