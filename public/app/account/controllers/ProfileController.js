'use strict';

app.controller('ProfileController', function($scope, $location, identity) {
    $scope.identity = identity;
    $scope.currentUser = identity.getCurrentUser();

    $scope.updateProfile = function (user) {
        auth.update(user);
    }
})