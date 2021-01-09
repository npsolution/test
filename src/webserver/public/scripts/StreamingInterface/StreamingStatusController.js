/**
 * @link https://github.com/datarhei/restreamer
 * @copyright 2015 datarhei.org
 * @license Apache-2.0
 */
'use strict';

/**
 * Streaming Status Controller
 *
 * controls the display of the streaming status (fps, status)
 */
window.angular.module('StreamingInterface').controller('streamingStatusController',
    ['$scope', ($scope) => {
        /**
         * extract statusName
         * @returns {string}
         */
        const statusName = () => {
            return $scope.data.states[$scope.name].type;
        };

        /**
         * check if the status is connecting
         * @returns {boolean}
         */
        $scope.connecting = () => {
            return statusName() === 'connecting';
        };

        /**
         * check if the status is connected
         * @returns {boolean}
         */
        $scope.connected = () => {
            return statusName() === 'connected';
        };

        /**
         * check if the status is stopped
         * @returns {boolean}
         */
        $scope.stopped = () => {
            return statusName() === 'stopped';
        };

        /**
         * check if the status is error
         * @returns {boolean}
         */
        $scope.error = () => {
            $scope.message = $scope.data.states[$scope.name].message;
            return statusName() === 'error';
        };

        /**
         * @returns {number} current FPS
         */
        $scope.fps = () => {
            return $scope.data.progresses ? $scope.data.progresses[$scope.name].currentFps : 0;
        };

        /**
         * @returns {number} current bit rate
         */
        $scope.kbps = () => {
            var bitrate = $scope.data.progresses ? $scope.data.progresses[$scope.name].currentKbps : 0;
            return bitrate.toFixed(1);
        };
    }]);
