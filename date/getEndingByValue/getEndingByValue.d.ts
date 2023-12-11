export type EndingTypes = {
    '1': string;
    '2-4': string;
    'other': string;
};
export declare const getEndingByValue: (value: number, types: EndingTypes, postfix?: string) => string;
