export type DateDelta = {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;
}

export type DateType = number | string | Date;

export const getDeltaByDates = function (start: DateType, finish: DateType): DateDelta {
    const startMs: number  = typeof start === 'function' ? +start : +new Date(start);
    const finishMs: number = typeof finish === 'function' ? +finish : +new Date(finish);
    const deltaMs: number  = finishMs - startMs;
    const second: number   = 1000;
    const minute: number   = second * 60;
    const hour: number     = minute * 60;
    const day: number      = hour * 24;
    const month: number    = day * 30;
    const year: number     = month * 12;
    const seconds: number  = Math.floor(deltaMs / second) % 60;
    const minutes: number  = Math.floor(deltaMs / minute) % 60;
    const hours: number    = Math.floor(deltaMs / hour) % 24;
    const days: number     = Math.floor(deltaMs / day) % 30;
    const months: number   = Math.floor(deltaMs / month) % 12;
    const years: number    = Math.floor(deltaMs / year);

    return {
        seconds, days, hours, minutes, months, years,
    };
};