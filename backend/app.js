var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var mongoose = require('mongoose');

var UserRouter = require('./routes/users');

var app = express();

const server = '127.0.0.1:27017';
const database = 'Users';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
        console.log('Adding resources')
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Formulario', UserRouter);


module.exports = app;

