'use strict';

app.controller('RegisterController', ['$scope', '$location', 'identity', 'auth', 
	function($scope, $location, identity, auth) {
	    $scope.identity = identity;

	    $scope.signup = function (user) {
	    	auth.signup(user);
            //identity.setCurrentUser(user);
	    	$location.path('/');
	    };
	}]);