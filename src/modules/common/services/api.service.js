'use strict';

module.exports = /*@ngInject*/
	function apiService($rootScope) {
		var url = {
			root: 'http://jsonplaceholder.typicode.com/',
			photos: 'photos',
			albums: 'albums',
		};

		url.getUrlPhotos = function () {
			return url.root + url.photos;
		};

		url.getUrlAlbumsAlbumId = function (album_id) {
			return url.root + url.albums + '/' + album_id + '/' + url.photos;
		};

		url.getUrlPhotosPhotoId = function (photo_id) {
			return url.root + url.photos + '/' + photo_id;
		};

		return {
			getUrlPhotos: url.getUrlPhotos,
			getUrlAlbumsAlbumId: url.getUrlAlbumsAlbumId,
			getUrlPhotosPhotoId: url.getUrlPhotosPhotoId
		};
	};