'use strict';

module.exports = /*@ngInject*/
    function photoController($scope, $http, $routeParams, apiService) {
		$http.get(apiService.getUrlPhotosPhotoId($routeParams.id))
			.then( function (response){
				$scope.photo = response.data;
			}, function (error){
				console.log(error);
			});
    };