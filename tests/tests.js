'use strict';

var request = require('request');
var chai = require('chai');
var uuid = require('node-uuid');
var expect = chai.expect;
chai.should();

var Db = require('mongoose')

describe('', function() {
    /*
    before(function(done){
        // Database setup
        var dbConfig = require('../config/database.js');
        Db.connect(dbConfig.cloudDb); // Cloud / local DB
        var db = Db.connection;

        db.on('error', console.error.bind(console, 'connection error: '));
        db.on('open', function () {
            console.log('Db connection opened.');
        });
    });
    */

    describe('Home Page /', function() {
        it('should be working (return status code 200)', function(done) {
            request.get({
                url: Url()
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(body).to.contain('Anemoi');
                done();
            })
        });

        it('should contain a title "Bookstore"', function(done) {
            request.get({
                url: Url()
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('<title>Bookstore</title>');
                done();
            })
        });

        it('should contain menus "Anemoi", "Books", and "About us"', function(done) {
            request.get({
                url: Url()
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('Anemoi');
                expect(body).to.contain('Books');
                expect(body).to.contain('About us');
                done();
            });
        });

        it('should contain copyright information "Team Anemoi - 2014"', function(done) {
            request.get({
                url: Url()
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('Team Anemoi - 2014');
                done();
            })
        });

        it('should contain login section', function(done) {
            request.get({
                url: Url()
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('Login');
                //expect(body).to.contain('Sign Up');
                done();
            })
        });
    });

    describe('Home Page / (logged in)', function() {
        it('should contain "Admin Panel" when admin logged in', function(done) {
            request.get({
                url: Url('/?user=Pesho&password=123123')
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('Admin Panel');
                done();
            })
        });

        it('should not contain login section when user logged in', function(done) {
            request.get({
                url: Url('/?user=Pesho&password=123123')
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.not.contain('>Login<');
                done();
            })
        });
    });

    describe('About Page /about', function() {
        it('should contain copyright information "Team Anemoi - 2014"', function(done) {
            request.get({
                url: Url('/#/about/')
            }, function(err, res, body) {
                //console.log(body);
                expect(body).to.contain('Team Anemoi - 2014');
                done();
            })
        });
    });

    describe('Invalid page', function() {
        it('should return status code 404', function(done) {
            request.get({
                url: Url('/nonsence/')
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(404);
                done();
            })
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