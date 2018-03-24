"use strict";
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var bar = document.querySelectorAll('.bar');

        var setStepsWidth = function () {
            for (var u = 0; u < bar.length; u++) {
                var points = bar[u].querySelectorAll('.bar__step');
                for (var i = 0; i < points.length; i++) {
                    if (i === 0) {
                        points[i].style.width = 0;
                    } else {
                        points[i].style.width = Math.floor(parseInt(getComputedStyle(bar[u]).width) / (points.length - 1)) + 'px';
                    }
                }
            }
        };
        window.addEventListener('resize', setStepsWidth);
        setStepsWidth();
    })();
});