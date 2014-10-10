'use strict';

var request = require('request');
var chai = require('chai');
var uuid = require('node-uuid');
var expect = chai.expect;
chai.should();

var Db = require('mongoose')

describe('', function() {
    before(function(done){
        // Database setup
        var dbConfig = require('./config/database.js');
        Db.connect(dbConfig.localDb); // Cloud / local DB
        var db = Db.connection;

        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', function () {
            console.log('Db connection opened.');
        });
    });
});

// Helper functions

function BaseUrl() {
    return 'http://localhost:3000';
}

function Url(path) {
    path = path || '';
    return BaseUrl() + path;
}