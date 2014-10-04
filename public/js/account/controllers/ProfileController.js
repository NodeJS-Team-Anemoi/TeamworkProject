'use strict';

app.controller('ProfileController', function($scope, $location, identity) {
    $scope.identity = identity;
})