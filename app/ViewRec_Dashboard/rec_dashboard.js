'use strict';

angular.module('myApp.Rec_Dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ViewRec_Dashboard', {
    templateUrl: 'ViewRec_Dashboard/rec_dashboard.html',
    controller: 'rec_dashboard'
  });
}])

.controller('rec_dashboard', [function() {

}]);