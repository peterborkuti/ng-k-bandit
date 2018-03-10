import { Util } from './util';

describe('argmax', () => {
  it('should give the max index', () => {
    expect(Util.argmax([0, 3, 2, 8, 4, 5])).toBe(3);
    expect(Util.argmax([])).toBe(-1);
  });
});

