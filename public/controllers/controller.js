var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {

  var refresh = function() {
    $http.get('/contactlist').success(function(response){
      $scope.contactlist = response;
      $scope.contact = "";
    });
  };

  refresh();

  $scope.addContact = function() {
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  };

}]);
