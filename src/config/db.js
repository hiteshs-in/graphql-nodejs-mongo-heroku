require('dotenv').config();

const mongoose = require('mongoose');

const DB_ATLAS_URL = process.env.DB_ATLAS_URL;

const connectDB = () => {
    return mongoose.connect(DB_ATLAS_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err){
            console.log("Connection to DB : ERROR");
        } else {
            console.log("Connection to DB : SUCCESS");
        }
    });
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

module.exports = connectDB;