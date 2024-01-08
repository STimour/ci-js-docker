import {describe, expect, test} from '@jest/globals';
import {sum, diff} from "../sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 1 - 2 to equal -1', () => {
  expect(diff(1, 2)).toBe(-1);
});