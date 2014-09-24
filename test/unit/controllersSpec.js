'use strict';

/* jasmine specs for controllers go here */

describe('PhotoAlbumList', function() {

	describe('photoAlbumListCtrl', function() {

		var scope, ctrl, $httpBackend;

		beforeEach(module('photoAlbumApp'));

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
    		$httpBackend = _$httpBackend_;
    		$httpBackend.expectGET('photoAlbums/photoAlbums.json')
    			.respond([
					{
						"name": "Greece, Rhodes",
						"desc": "Our greek holiday in Rhodes",
						"year": 2013
					},
					{
						"name": "Italy, Venice",
						"desc": "My first holiday to Italy",
						"year": 2009
					},
					{
						"name": "Leeds Castle",
						"desc": "Our first holiday to Leeds Castle",
						"year": 2012
					}
				]);


			scope = $rootScope.$new();
			ctrl = $controller('PhotoAlbumList', {$scope: scope});
		}));

		it('should list 3 albums of my holiday', function (){
			expect(scope.photoAlbums).toBeUndefined();
			$httpBackend.flush();

			expect(scope.photoAlbums.length).toBe(3);
		});

	});
	
});
