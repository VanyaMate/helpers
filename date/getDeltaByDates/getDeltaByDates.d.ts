export type DateDelta = {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;
};
export type DateType = number | string | Date;
export declare const getDeltaByDates: (start: DateType, finish: DateType) => DateDelta;
