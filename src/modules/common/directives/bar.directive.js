'use strict';

module.exports = /*@ngInject*/
	function barDirective($location, $window) {
		return {
			restrict: 'E',
			templateUrl: 'app/foo/templates/bar.html',
			link: function (scope, element) {
				scope.isOpen = false;
				scope.home = function () {
					$location.path('/');
				};
				scope.redirectToGoogle = function () {
					$window.open('https://www.google.com', '_blank');
				};
			}
		};
	};