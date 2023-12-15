"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringDeltaByDates = void 0;
var getEndingByValue_1 = require("../getEndingByValue/getEndingByValue");
var getStringDeltaByDates = function (delta, postfix) {
    if (delta.years > 0) {
        return (0, getEndingByValue_1.getEndingByValue)(delta.years, {
            '1': 'год',
            '2-4': 'года',
            'other': 'лет',
        }, postfix);
    }
    else if (delta.months > 0) {
        return (0, getEndingByValue_1.getEndingByValue)(delta.months, {
            '1': 'месяц',
            '2-4': 'месяца',
            'other': 'месяцев',
        }, postfix);
    }
    else if (delta.days > 0) {
        return (0, getEndingByValue_1.getEndingByValue)(delta.days, {
            '1': 'день',
            '2-4': 'дня',
            'other': 'дней',
        }, postfix);
    }
    else if (delta.hours > 0) {
        return (0, getEndingByValue_1.getEndingByValue)(delta.hours, {
            '1': 'час',
            '2-4': 'часа',
            'other': 'часов',
        }, postfix);
    }
    else if (delta.minutes > 0) {
        return (0, getEndingByValue_1.getEndingByValue)(delta.minutes, {
            '1': 'минуту',
            '2-4': 'минуты',
            'other': 'минут',
        }, postfix);
    }
    else {
        return (0, getEndingByValue_1.getEndingByValue)(delta.seconds, {
            '1': 'секунду',
            '2-4': 'секунды',
            'other': 'секунд',
        }, postfix);
    }
};
exports.getStringDeltaByDates = getStringDeltaByDates;
