import { describe, test, expect } from '@jest/globals';
import { getStringDeltaByDates } from './getStringDeltaByDates';
import { getDeltaByDates } from '../getDeltaByDates/getDeltaByDates';


describe('getStringDeltaByDates', () => {
    test('seconds', () => {
        expect(getStringDeltaByDates(getDeltaByDates(10000, 62000))).toBe('52 секунды назад');
        expect(getStringDeltaByDates(getDeltaByDates(10000, 11111))).toBe('1 секунду назад');
        expect(getStringDeltaByDates(getDeltaByDates(10000, 13232))).toBe('3 секунды назад');
        expect(getStringDeltaByDates(getDeltaByDates(10000, 23000))).toBe('13 секунд назад');
        expect(getStringDeltaByDates(getDeltaByDates(10000, 29000))).toBe('19 секунд назад');
        expect(getStringDeltaByDates(getDeltaByDates(10000, 31000))).toBe('21 секунду назад');
    });
    test('minutes', () => {
        expect(getStringDeltaByDates(getDeltaByDates(10000, 70000))).toBe('1 минуту назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 2))).toBe('2 минуты назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 4))).toBe('4 минуты назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 5))).toBe('5 минут назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 11))).toBe('11 минут назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 21))).toBe('21 минуту назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 53))).toBe('53 минуты назад');
    });
    test('hours', () => {
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60))).toBe('1 час назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 2))).toBe('2 часа назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 10))).toBe('10 часов назад');
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 23))).toBe('23 часа назад');
    });
    test('days', () => {
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24))).toBe(`1 день назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 2))).toBe(`2 дня назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 4))).toBe(`4 дня назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 7))).toBe(`7 дней назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 15))).toBe(`15 дней назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 21))).toBe(`21 день назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 29))).toBe(`29 дней назад`);
    });
    test('months', () => {
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30))).toBe(`1 месяц назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 2))).toBe(`2 месяца назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 4))).toBe(`4 месяца назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 5))).toBe(`5 месяцев назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 11))).toBe(`11 месяцев назад`);
    });
    test('years', () => {
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12))).toBe(`1 год назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 2))).toBe(`2 года назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 4))).toBe(`4 года назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 5))).toBe(`5 лет назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 10))).toBe(`10 лет назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 21))).toBe(`21 год назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 22))).toBe(`22 года назад`);
        expect(getStringDeltaByDates(getDeltaByDates(0, 60000 * 60 * 24 * 30 * 12 * 36))).toBe(`36 лет назад`);
    });
});