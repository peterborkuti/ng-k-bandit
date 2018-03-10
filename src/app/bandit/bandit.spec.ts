import { Bandit } from './bandit';

describe('Bandit', () => {
  it('should initialize with defaults', () => {
    const b = new Bandit();
    expect(b.maxZeroPoint).toBe(7);
    expect(b.minZeroPoint).toBe(-7);
  });

  it('should increase', () => {
    const b = new Bandit();
    b.increaseZeroPoint();
    expect(b.getZeroPoint()).toBe(1);
  });

  it('should decrease', () => {
    const b = new Bandit();
    b.decreaseZeroPoint();
    expect(b.getZeroPoint()).toBe(-1);
  });

  it('should check max', () => {
    const b = new Bandit(1);
    b.increaseZeroPoint();
    b.increaseZeroPoint();
    expect(b.getZeroPoint()).toBe(1);
  });

  it('should check min', () => {
    const b = new Bandit(1, -1);
    b.decreaseZeroPoint();
    b.decreaseZeroPoint();
    expect(b.getZeroPoint()).toBe(-1);
  });
});
