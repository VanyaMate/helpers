import { describe, expect, test } from '@jest/globals';
import { DateDelta, getDeltaByDates } from './getDeltaByDates';


describe('Get Delta by Dates', () => {
    test('By Numbers', () => {
        const minute: number = 60000;
        const hour: number   = minute * 60;
        const day: number    = hour * 24;
        const month: number  = day * 30;

        expect(getDeltaByDates(10000, 15000)).toEqual({
            seconds: 5,
            minutes: 0,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(10000, 26000)).toEqual({
            seconds: 16,
            minutes: 0,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(10000, 72000)).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(10000, 72000 * 5)).toEqual({
            seconds: 50,
            minutes: 5,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(minute, minute * 61 + 5000 * 13)).toEqual({
            seconds: 5,
            minutes: 1,
            hours  : 1,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(minute, minute * 61 + 5000 * 13 + day)).toEqual({
            seconds: 5,
            minutes: 1,
            hours  : 1,
            days   : 1,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(minute, minute * 61 + 5000 * 13 + day + month * 13)).toEqual({
            seconds: 5,
            minutes: 1,
            hours  : 1,
            days   : 1,
            months : 1,
            years  : 1,
        } as DateDelta);
    });
    test('By Strings', () => {
        expect(getDeltaByDates(new Date(10000).toLocaleString(), new Date(72000).toLocaleString())).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(new Date(10000).toUTCString(), new Date(72000).toString())).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(new Date(10000).toString(), new Date(72000).toLocaleString())).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);
    });
    test('Mixed', () => {
        expect(getDeltaByDates(new Date(10000), new Date(72000).toString())).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);

        expect(getDeltaByDates(new Date(10000), 72000)).toEqual({
            seconds: 2,
            minutes: 1,
            hours  : 0,
            days   : 0,
            months : 0,
            years  : 0,
        } as DateDelta);
    });
});