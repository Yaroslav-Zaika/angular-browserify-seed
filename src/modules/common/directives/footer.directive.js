'use strict';

module.exports = /*@ngInject*/
	function footerDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/foo/templates/footer.html',
			link: function (scope, element) {}
		};
	};