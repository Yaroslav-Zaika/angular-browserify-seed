'use strict';

module.exports = /*@ngInject*/
	function imageController($scope, $routeParams, contentService) {
		contentService.getImage($routeParams.id).then(function (response) {
			$scope.image = response.data;
		});
	};