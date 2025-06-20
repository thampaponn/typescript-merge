import { merge } from '../src/merge';

describe('merge', () => {
  it('should merge and sort all arrays', () => {
    const result = merge([9, 7, 5], [1, 3, 8], [0, 4, 6]);
    expect(result).toEqual([0, 1, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([5, 3], [], [])).toEqual([3, 5]);
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
  });

  it('should handle duplicates', () => {
    const result = merge([6, 4, 4], [1, 4, 5], [0, 4, 6]);
    expect(result).toEqual([0, 1, 4, 4, 4, 4, 5, 6, 6]);
  });
});