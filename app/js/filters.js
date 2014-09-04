'use strict';

/* Filters */
var photoAlbumFilters = angular.module('photoAlbumFilters', []);

/* experimenting with custom filters. I know there is a shorthand to uppercase in Angular*/
photoAlbumFilters.filter('MyUppercase', function() {  
	return function(input) {
		var output = [];  
		angular.forEach(input, function(v,k){
			v.name = v.name.toUpperCase();
			output.push(v);
		});
		return output;
	};
});  