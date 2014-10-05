'use strict';

var app = angular.module('Bookstore', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: '/partials/account/login',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: '/partials/account/register',
            controller: 'RegisterController'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileController'
        });
});