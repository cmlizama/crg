'use strict';
var angular;
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.main',
  'ngMaterial',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

angular.module('myApp.main', ['ngRoute',"firebase"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', ['$scope', '$firebase', function($scope, $firebase) {

    var ref = new Firebase("https://siphon.firebaseio.com");
      $scope.data = $firebase(ref).$asArray();


    $scope.addName = function(e) {
            if (e.keyCode === 13 && $scope.body) {
          $scope.data.$add({name: $scope.body, time: $scope.time});
              $scope.body = "";
            }
          }

        $scope.deleteMessage = function(id) {
          $scope.data.$remove(id);
        }
}]);