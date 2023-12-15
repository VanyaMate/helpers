import { DateDelta } from '../getDeltaByDates/getDeltaByDates';
import { getEndingByValue } from '../getEndingByValue/getEndingByValue';


export const getStringDeltaByDates = function (delta: DateDelta, postfix?: string): string {
    if (delta.years > 0) {
        return getEndingByValue(delta.years, {
            '1'    : 'год',
            '2-4'  : 'года',
            'other': 'лет',
        }, postfix);
    } else if (delta.months > 0) {
        return getEndingByValue(delta.months, {
            '1'    : 'месяц',
            '2-4'  : 'месяца',
            'other': 'месяцев',
        }, postfix);
    } else if (delta.days > 0) {
        return getEndingByValue(delta.days, {
            '1'    : 'день',
            '2-4'  : 'дня',
            'other': 'дней',
        }, postfix);
    } else if (delta.hours > 0) {
        return getEndingByValue(delta.hours, {
            '1'    : 'час',
            '2-4'  : 'часа',
            'other': 'часов',
        }, postfix);
    } else if (delta.minutes > 0) {
        return getEndingByValue(delta.minutes, {
            '1'    : 'минуту',
            '2-4'  : 'минуты',
            'other': 'минут',
        }, postfix);
    } else {
        return getEndingByValue(delta.seconds, {
            '1'    : 'секунду',
            '2-4'  : 'секунды',
            'other': 'секунд',
        }, postfix);
    }
};