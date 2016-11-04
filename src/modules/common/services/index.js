'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('contentService', require('./content.service'));
