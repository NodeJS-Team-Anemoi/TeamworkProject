'use strict';

app.controller('LoginController', ['$scope', '$location', 'identity', 'auth',
	function($scope, $location, identity, auth) {
	    $scope.identity = identity;

	    $scope.login = function (user) {
	    	auth.login(user);
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