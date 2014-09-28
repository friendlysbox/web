'use strict';

/* App Module */
var photoAlbumApp = angular.module('photoAlbumApp', [
		'ngRoute',
		'photoAlbumControllers',
		'photoAlbumFilters'
	]).directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane1) {
            pane1.selected = false;
          });
          pane.selected = true;
        };

        this.addPane = function(pane) {
          if (panes.length === 0) {
            //$scope.select(pane);
            pane.selected = true;
          }
          panes.push(pane);
        };
      },
      templateUrl: 'my-tabs.html'
    };
  })
  .directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'my-pane.html'
    };
  });

photoAlbumApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/photoalbumfilter', {
			templateUrl: 'partials/pafilter.html',
			controller: 'PhotoAlbumList'
		}).
		when('/photoalbumtable', {
			templateUrl: 'partials/patable.html',
			controller: 'PhotoAlbumList'
		}).
		when('/directiveexample', {
			templateUrl: 'partials/directiveexample.html',
			controller: 'PhotoAlbumList'
		}).
		otherwise({
			redirectTo: '/photoalbumfilter'
		});
	}]);
