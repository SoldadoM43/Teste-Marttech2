const express = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
});

const db = mongoose.connection;
const Tasks = require('./models/tasks');
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

module.exports = app;