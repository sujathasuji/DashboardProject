/**
 * Created by sujatha on 30/06/16.
 */
'use strict';

angular.module('myApp.Chapter', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ViewChapter', {
            templateUrl: 'ViewChapter/chapter_page.html',
            controller: 'ChapterCtrl'
        });
    }])

    .controller('ChapterCtrl', [function() {

    }]);