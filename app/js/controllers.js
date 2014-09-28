'use strict';

/* Controllers */
var photoAlbumControllers = angular.module('photoAlbumControllers', []);

photoAlbumControllers.controller('PhotoAlbumList', ['$scope', '$http', function ($scope, $http) {
	$http.get('photoAlbums/photoAlbums.json').success(function(data){
		$scope.photoAlbums = data;
	});

	$scope.defaultOrder = 'year';
	$scope.reverse = true;
	$scope.nameArrowClass = "";
	$scope.yearArrowClass = "glyphicon glyphicon-arrow-up";

	$scope.showArrow = function() {
		if($scope.defaultOrder == 'year') {
			if($scope.reverse){
				$scope.yearArrowClass = "glyphicon glyphicon-arrow-up";
			} else {
				$scope.yearArrowClass = "glyphicon glyphicon-arrow-down";
			}
			$scope.nameArrowClass = "";			
		} else if ($scope.defaultOrder == 'name') {
			if($scope.reverse){
				$scope.nameArrowClass = "glyphicon glyphicon-arrow-up";
			} else {
				$scope.nameArrowClass = "glyphicon glyphicon-arrow-down";
			}
			$scope.yearArrowClass = "";			
		}
	}
	
}]);

photoAlbumControllers.controller('NavController', ['$scope', '$location', function ($scope, $location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);