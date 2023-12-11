"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeltaByDates = void 0;
var getDeltaByDates = function (start, finish) {
    var startMs = typeof start === 'function' ? +start : +new Date(start);
    var finishMs = typeof finish === 'function' ? +finish : +new Date(finish);
    var deltaMs = finishMs - startMs;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = month * 12;
    var seconds = Math.floor(deltaMs / second) % 60;
    var minutes = Math.floor(deltaMs / minute) % 60;
    var hours = Math.floor(deltaMs / hour) % 24;
    var days = Math.floor(deltaMs / day) % 30;
    var months = Math.floor(deltaMs / month) % 12;
    var years = Math.floor(deltaMs / year);
    return {
        seconds: seconds,
        days: days,
        hours: hours,
        minutes: minutes,
        months: months,
        years: years,
    };
};
exports.getDeltaByDates = getDeltaByDates;
