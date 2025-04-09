'use strict';

import { getQuarter } from './solution1.js';

test('returns 1 for January', () => {
    expect(getQuarter(1)).toBe(1);
});

test('returns 2 for May', () => {
    expect(getQuarter(5)).toBe(2);
});

test('returns 3 for August', () => {
    expect(getQuarter(8)).toBe(3);
});

test('returns 4 for November', () => {
    expect(getQuarter(11)).toBe(4);
});
