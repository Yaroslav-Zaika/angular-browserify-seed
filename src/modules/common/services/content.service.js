'use strict';

module.exports = /*@ngInject*/
	function contentService($http, $q) {
		var apiEndpoint = 'http://jsonplaceholder.typicode.com/';
		var methods = {};

		methods.getAllImages = function () {
			return $http.get(apiEndpoint + 'photos');
		};

		methods.getAlbumImages = function (album_id) {
			return $http.get(apiEndpoint + 'albums/' + album_id + '/photos');
		};

		methods.getImage = function (photo_id) {
			return $http.get(apiEndpoint + 'photos/' + photo_id);
		};

		return {
			getAllImages: methods.getAllImages,
			getAlbumImages: methods.getAlbumImages,
			getImage: methods.getImage
		};
	};