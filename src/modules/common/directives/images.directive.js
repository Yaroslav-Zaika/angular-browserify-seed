'use strict';

module.exports = /*@ngInject*/
	function imagesDirective() {
		return {
			restrict: 'E',
			scope: true,
			templateUrl: 'app/foo/templates/images.html',
			link: function (scope, element) {}
		};
	};