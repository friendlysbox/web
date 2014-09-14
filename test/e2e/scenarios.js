'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Photo Album App', function() {

	describe('Photo Album list', function() {

		beforeEach(function(){
			browser.get('app/index.html');
		});

		it('should filter the album options by the text I enter', function () {
			var albumList = element.all(by.repeater('album in photoAlbums')),
			query = element(by.model('query'));

			expect(albumList.count()).toBe(3);

			query.sendKeys('gree');
			expect(albumList.count()).toBe(1);

			query.clear();
			query.sendKeys('italy');
			expect(albumList.count()).toBe(1);
		});

		it('should filter the album by the year I select', function () {			
			var albumListNameColumn = element.all(by.repeater('album in photoAlbums').column('{{album.name}}'));

			function getNames() {
				return albumListNameColumn.map(function(elm) {
					return elm.getText();
				});
			}

			element(by.model('cboYear')).element(by.css('option[value="2009"]')).click();

			expect(getNames()).toEqual([
				"ITALY, VENICE"
			]);

		});

		it('should order the year column by the year', function () {			
			var albumListNameColumn = element.all(by.repeater('album1 in photoAlbums').column('{{album1.year}}'));

			function getNames() {
				return albumListNameColumn.map(function(elm) {
					return elm.getText();
				});
			}

			expect(getNames()).toEqual([
				'2013', '2012', '2009'
			]);

			element(by.css('#year')).click();
			
			expect(getNames()).toEqual([
				'2009', '2012', '2013'
			]);

		});
		
	});

});
