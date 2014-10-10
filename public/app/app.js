'use strict';

var app = angular.module('Bookstore', ['ngResource', 'ngRoute', 'ngCookies', 'ngStorage']);

app.config(function ($routeProvider, $locationProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAdmin();
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
            controller: 'ProfileController',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin', {
            templateUrl: '/partials/admin/admin-panel',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/add-book', {
            templateUrl: '/partials/admin/add-book',
            controller: 'AddBookController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/edit-book/:id', {
            templateUrl: '/partials/admin/edit-book',
            controller: 'EditBookController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/add-user', {
            templateUrl: '/partials/admin/add-user',
            controller: 'AddUserController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/manage-users',
            controller: 'UsersController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/users/edit/:id', {
            templateUrl: '/partials/admin/edit-user',
            controller: 'EditUserController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/users/delete/:id', {
            templateUrl: '/partials/admin/delete-user',
            controller: 'DeleteUserController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/orders', {
            templateUrl: '/partials/admin/manage-orders',
            controller: 'OrdersManagementController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/orders/edit/:id', {
            templateUrl: '/partials/admin/edit-order',
            controller: 'EditOrderController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/orders/delete/:id', {
            templateUrl: '/partials/admin/delete-order',
            controller: 'DeleteOrderController',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/orders/details/:id', {
            templateUrl: '/partials/admin/order-details',
            controller: 'OrderDetailsController',
            resolve: routeUserChecks.adminRole
        })
        .when('/orders/:id', {
            templateUrl: 'partials/orders/my-orders',
            controller: 'OrdersController',
            resolve: routeUserChecks.authenticated
        })
        .when('/shoppingCart', {
            templateUrl: 'partials/shoppingCart/shoppingCart',
            controller: 'ShoppingCartController',
            resolve: routeUserChecks.authenticated
        })
        .when('/catalog', {
            templateUrl: 'partials/catalog/catalog',
            controller: 'CatalogController',
            resolve: routeUserChecks.authenticated
        })
        .when('/unauthorized', {
            templateUrl: 'partials/common/unauthorized'
        })
        .when('/about', {
            templateUrl: 'partials/about/about'
        });
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/unauthorized');
        }
    })
});