'use strict';

app.controller('BooksController', ['$scope', 'bookResource', function ($scope, bookResource) { 
    bookResource.getAll().then(function (books) {
        $scope.books = books;
    });
    
//    $scope.featuredBooks = [{
//        title: 'NodeJS like a Pro',
//        annotation: '',
//        image: coolBookImage
//    }, {
//        title: 'C# 5.0',
//        annotation: 'The best book you will ever read. You will learn about C# new features and its new view engine... The best book you will ever read. You will learn about C# new features and its new view engine...',
//        image: coolBookImage
//    }, {
//        title: 'AngularJS Directives',
//        annotation: 'You can learn what are the directives, their pros and cons, how to use them and how to create them like a pro. You can learn what are the directives, their pros and cons, how to use them and how to create them like a pro.',
//        image: coolBookImage
//    }];
//    
//    $scope.newBooks = [{
//        title: 'NodeJS like a Pro',
//        annotation: 'If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more. If you want to be master in NodeJS this is the book. Learn about modules, requests, responses and more.',
//        image: coolBookImage
//    }, {
//        title: 'Pod igoto',
//        annotation: 'The best book you will ever read. It tells a story of...',
//        image: coolBookImage
//    }, {
//        title: 'AngularJS Directives',
//        annotation: 'You can learn what are the directives, their pros and cons, how to use them and how to create them like a pro. You can learn what are the directives, their pros and cons, how to use them and how to create them like a pro.',
//        image: coolBookImage
//    }];
}]);