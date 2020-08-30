const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const calendarSchema = new Schema({
    listing_id: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    available: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    adjusted_price: {
        type: String,
        trim: true
    },
    minimum_nights: {
        type: String,
        trim: true
    },
    maximum_nights: {
        type: String,
        trim: true
    }
});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = { Calendar };