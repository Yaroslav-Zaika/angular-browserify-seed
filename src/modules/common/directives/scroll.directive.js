'use strict';

module.exports = /*@ngInject*/
	function scrollDirective($window) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				angular.element($window).bind('scroll', function () {
					var body = document.body;
					if (this.pageYOffset + body.clientHeight >= element[0].scrollHeight - body.clientHeight / 2) {
						scope.$apply(attrs.scrollDirective);
					}
				});
			}
		};
	};