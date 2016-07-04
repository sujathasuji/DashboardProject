'use strict';

angular.module('myApp.Topics', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ViewTopics', {
            templateUrl: 'ViewTopics/topics.html',
            controller: 'TopicsCtrl'
        });
    }])

    .controller('TopicsCtrl', [function() {

    }]);