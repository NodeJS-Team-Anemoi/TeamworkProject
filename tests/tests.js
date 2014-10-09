'use strict';

var mongoose = require('mongoose');

// Database setup
var dbConfig = require('./config/database.js');

mongoose.connect(dbConfig.cloudDb); // Cloud / local DB

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Db connection opened.');
});

// Helper functions

function BaseUrl() {
    return 'http://localhost:3000';
}

function Url(path) {
    path = path || '';
    return BaseUrl() + path;
}