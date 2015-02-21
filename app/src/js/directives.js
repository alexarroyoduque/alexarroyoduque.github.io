(function () {

    'use strict';

    angular.module('starterApp').directive('alexAudioControl', [
        function () {
            return {
                restrict: 'A',
                link: function (scope) {
                    var theme = document.getElementById('portfolioTheme');
                    scope.$watch('isPlaying', function (newValue) {
                        if (newValue) {
                            theme.play();
                        } else {
                            theme.pause();
                        }
                    })
                }
            };
        }
    ]);
})();