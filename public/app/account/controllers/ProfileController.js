'use strict';

app.controller('ProfileController', function($scope, $location, identity, auth) {
    $scope.identity = identity;
    $scope.currentUser = identity.getCurrentUser();

    $scope.updateProfile = function (user) {
        auth.update(user);
    }
})