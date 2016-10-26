'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
		.controller('photosController', require('./controllers/photos.controller'))
		.controller('photoController', require('./controllers/photo.controller'));