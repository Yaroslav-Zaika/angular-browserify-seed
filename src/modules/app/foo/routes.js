'use strict';

module.exports = /*ngInject*/
	function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/foo/templates/images.html',
				controller: 'imagesList.controller'
			})
			.when('/image/:id', {
				templateUrl: 'app/foo/templates/image.html',
				controller: 'imageController'
			})
			.when('/album/:id', {
				templateUrl: 'app/foo/templates/images.html',
				controller: 'imagesList.controller'
			})
			.otherwise({
				redirectTo: '/'
			});
	};