angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
	};	

});