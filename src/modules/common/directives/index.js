'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('barDirective', require('./bar.directive'))
        .directive('imagesDirective', require('./images.directive'))
        .directive('footerDirective', require('./footer.directive'))
        .directive('scrollDirective', require('./scroll.directive'));
