'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  /*'myApp.Dashboard',
  'myApp.Rec_Dashboard',
  'myApp.Topics',*/
  'myApp.Record',

  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  /*san*/
/*  $routeProvider.when('/ViewDashboard', {
    templateUrl: 'ViewDashboard/dashboard.html',
    controller: 'View1DashCtrl'
  });*/

  /*$routeProvider.when('/ViewRec_Dashboard', {
    templateUrl: 'ViewRec_Dashboard/rec_dashboard.html',
    controller: 'rec_dashboard'
  });*/
  $routeProvider.when('/ViewRecord1', {
    templateUrl: 'ViewRecord1.html',
    controller: 'RecordCtrl'
  });
 /* $routeProvider.when('/ViewChapter', {
    templateUrl: 'ViewChapter/chapter_page.html',
    controller: 'ChapterCtrl'
  });*/
/*  $routeProvider.when('/ViewTopics', {
    templateUrl: 'ViewTopics/topics.html',
    controller: 'TopicsCtrl'
  });*/
  /*$routeProvider.otherwise({redirectTo: '/ViewDashboard'});*/
}]);
