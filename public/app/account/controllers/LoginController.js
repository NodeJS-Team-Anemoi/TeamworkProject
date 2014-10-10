'use strict';

app.controller('LoginController', ['$scope', '$location', 'identity', 'auth', '$localStorage',
	function($scope, $location, identity, auth, $localStorage) {
	    $scope.identity = identity;

	    $scope.login = function (user) {
	    	auth.login(user).then(function () {
                $localStorage.currentOrder = {
                    readyToShip: false,
                    products: [{
                        title: "NodeJS like a Pro",
                        price: 19.99,
                        rating: 0,
                        timesPurchased: 0,
                        publisher: "O'Reilly",
                        year: 2013,
                        isbn: "123214212111",
                        pages: 241,
                        language: "English",
                        countInStock: 50,
                        annotation: "If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more. If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more.",
                        _id: "54369f36b0bea5048b8e3ac4",
                        comments: [],
                        reviews: [],
                        categories: [
                            "Programming"
                        ],
                        authors: [
                            "John Brown"
                        ],
                        __v: 0
                    }, {
                        title: "Sample Book",
                        price: 8789,
                        rating: 0,
                        timesPurchased: 0,
                        publisher: "Nqkoi",
                        year: 2013,
                        isbn: "123214212111",
                        pages: 241,
                        language: "English",
                        countInStock: 50,
                        annotation: "If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more. If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more.",
                        _id: "54369f36b0bea5048b8e3ac4",
                        comments: [],
                        reviews: [],
                        categories: [
                            "Programming"
                        ],
                        authors: [
                            "John Brown"
                        ],
                        __v: 0
                    }]
                };
            });
	    }

	    $scope.logout = function () {
	    	auth.logout().then(function () {
	    		if ($scope.user) {
	                $scope.user.username = '';
	                $scope.user.password = '';
	            }
	            $location.path('/');
	    	});
	    }
	}]);