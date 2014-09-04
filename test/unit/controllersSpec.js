'use strict';

/* jasmine specs for controllers go here */

describe('PhotoAlbumList', function() {

	describe('photoAlbumListCtrl', function() {

		var scope, ctrl;

		beforeEach(module('photoAlbumApp'));

		beforeEach(inject(function($controller){
			scope = {};
			ctrl = $controller('PhotoAlbumList', {$scope: scope});
		}));

		it('should list 3 albums of my holiday', function (){
			expect(scope.photoAlbums.length).toBe(3);
		});

	});
	
});
