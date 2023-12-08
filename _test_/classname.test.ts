import { describe, expect, test } from '@jest/globals';
import { cn } from '../react/classname';


describe('ClassName join', () => {
    test('only strings', () => {
        expect(cn('string', 'string 2')).toBe('string string 2');
    });

    test('only booleans', () => {
        expect(cn(false, false)).toBe('');
    });

    test('different things', () => {
        expect(cn('string', true && 'class', false && 'not', undefined, null, 'last')).toBe('string class last');
    });
});