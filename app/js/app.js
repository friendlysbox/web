'use strict';

/* App Module */
var photoAlbumApp = angular.module('photoAlbumApp', [
		'photoAlbumControllers',
		'photoAlbumFilters'
	]);


function windowScopedFilter (input) {  
	var output = [];  

	angular.forEach(input, function(v,k){
		console.log(v);
		console.log(k);
		v.name = v.name.toUpperCase();
		output.push(v);
	});  
	console.log(output);

	return output;       
 }  