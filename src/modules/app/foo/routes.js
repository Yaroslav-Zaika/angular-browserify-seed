'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
			.when('/', {
                templateUrl: 'app/foo/templates/photos.html',
                controller: 'photosController'
            })
			.when('/image/:id', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'photoController'
            })
			.when('/album/:id', {
                templateUrl: 'app/foo/templates/photos.html',
                controller: 'photosController'
            })
            .otherwise({
                redirectTo: '/'
            });
    };