'use strict';

app.controller('LoginController', function($scope, $location, identity) {
    $scope.identity = identity;
})