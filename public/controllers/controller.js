var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {

  $http.get('/contactList').success(function(response){
    $scope.contactList = response;
  });

}]);
