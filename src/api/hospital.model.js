const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Hospital
let Patients = new Schema({
    name: {
        type: String
    },
    hospital: {
        type: String
    },
    bednumber: {
        type: Number
    }
}, {
    collection: 'persons'
});

module.exports = mongoose.model('Persons', Persons);