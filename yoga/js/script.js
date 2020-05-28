window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let calc = require('../src/js/calc.js'),
        form = require('../src/js/form.js'),
        modal = require('../src/js/modal.js'),
        slider = require('../src/js/slider.js'),
        tabs = require('../src/js/tabs.js'),
        timer = require('../src/js/timer.js');

    calc();
    form.default();
    modal();
    slider();
    tabs();
    timer();

});
