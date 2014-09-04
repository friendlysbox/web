'use strict';

/* Controllers */
var photoAlbumControllers = angular.module('photoAlbumControllers', []);

photoAlbumControllers.controller('PhotoAlbumList', function ($scope) {
	$scope.photoAlbums = [
		{
			'name': 'Greece, Rhodes',
			'desc': 'Our greek holiday in Rhodes',
			'year': 2013
		},
		{
			'name': 'Italy, Venice',
			'desc': 'My first holiday to Italy',
			'year': 2009
		},
		{
			'name': 'Leeds Castle',
			'desc': 'Our first holiday to Leeds Castle',
			'year': 2012
		}
	];

	$scope.defaultOrder = 'year';
	$scope.reverse = true;
	$scope.nameArrowClass = "";
	$scope.yearArrowClass = "glyphicon glyphicon-arrow-down";

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
	
});

