'use strict';

var app = angular.module('Bookstore', ['ngResource', 'ngRoute', 'ngCookies']);

app.config(function ($routeProvider, $locationProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('Admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };
    
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
        })
        .when('/admin', {
            templateUrl: '/partials/admin/admin-panel'
        })
        .when('/admin/add-book', {
            templateUrl: '/partials/admin/add-book',
            controller: 'AddBookController'
        })
        .when('/my-orders', {
            templateUrl: 'partials/orders/my-orders',
            controller: 'MyOrdersController'
        });
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});