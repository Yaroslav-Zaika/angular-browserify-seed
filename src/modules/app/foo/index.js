'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
		.controller('imagesList.controller', require('./controllers/imagesList.controller'))
		.controller('imageController', require('./controllers/image.controller'));