'use strict';

module.exports = /*@ngInject*/
	function barDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/foo/templates/bar.html',
			link: function (scope, element) {
				scope.isOpen = false;
			}
		};
	};