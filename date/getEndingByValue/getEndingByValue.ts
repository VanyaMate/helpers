export type EndingTypes = {
    '1': string;
    '2-4': string;
    'other': string;
}

export const getEndingByValue = function (value: number, types: EndingTypes, postfix?: string): string {
    if (((value % 10) > 4) || (value > 4 && value < 20) || ((value % 10) === 0)) {
        return `${ value } ${ types['other'] } ${ postfix ?? 'назад' }`;
    } else if (value % 10 === 1) {
        return `${ value } ${ types['1'] } ${ postfix ?? 'назад' }`;
    } else {
        return `${ value } ${ types['2-4'] } ${ postfix ?? 'назад' }`;
    }
};