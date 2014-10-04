'use strict';

var app = angular.module('Bookstore', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '',
            controller: 'MainController'
        });
});