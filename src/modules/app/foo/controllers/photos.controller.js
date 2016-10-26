'use strict';

module.exports = /*@ngInject*/
	function photosController($scope, $location, $routeParams, $http, apiService) {
		var allPhotos;
		var showPhotos = [];
		var start = 0;
		var end = 10;
		var url;
		if ($location.$$path.indexOf('album') !== -1 && $location.$$path.indexOf('album')) {
			url = apiService.getUrlAlbumsAlbumId($routeParams.id);
			$scope.album = false;
		} else {
			url = apiService.getUrlPhotos();
			$scope.album = true;
		}
		$http.get(url)
			.then(function (response) {
				allPhotos = response.data;
				$scope.addPhotos();
			}, function (error) {
				console.log(error);
			});
	
		$scope.addPhotos = function () {
			if(allPhotos && allPhotos.length){
				showPhotos = showPhotos.concat(allPhotos.slice(start, start + end));
				$scope.photos = showPhotos;
				start = start + end;
			}
		};
	};