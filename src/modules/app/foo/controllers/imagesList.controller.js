'use strict';

module.exports = /*@ngInject*/
	function imagesListController($scope, $location, $routeParams, contentService) {
		var allImages;
		var showImages = [];
		var start = 0;
		var end = 10;

		if ($location.$$path.indexOf('album') !== -1 && $location.$$path.indexOf('album')) {
			contentService.getAlbumImages($routeParams.id).then(setData);
			$scope.album = false;
		} else {
			contentService.getAllImages().then(setData);
			$scope.album = true;
		}

		function setData(response) {
			allImages = response.data;
			$scope.addImages();
		};

		$scope.addImages = function () {
			if (allImages && allImages.length) {
				showImages = showImages.concat(allImages.slice(start, start + end));
				$scope.images = showImages;
				start = start + end;
			}
		};
	};