angular.module('ContactCtrl', []).controller('ContactController',['$scope', '$http',  function($scope,$http) {
	$scope.formSent = false;
	$scope.addMsg = function(callback) {
       var formData = $scope.form;
       var res = $http.post("/submit-contact/", formData).success(callback);
       console.log(res);
      $scope.senderName=$scope.form.name
      $scope.formSent = true;
      
    };

    $scope.successAlert = function() {
    	return $scope.formSent;
       
    };

    $scope.clearForm = function() {
    	$scope.form.email="";
      $scope.form.message="";
      $scope.form.name="";
      $scope.formSent= false; 
       
    };


}]);