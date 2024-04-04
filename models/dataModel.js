const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    lightIndex: Number,
    timestamp: { type: Date, default: Date.now }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;