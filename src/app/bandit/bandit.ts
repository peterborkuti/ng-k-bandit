import { BoxMuller } from './gaussianrandom';

export class Bandit {
  private gaussianRandom = new BoxMuller();

  private zeroPoint = 0;

  constructor(readonly maxZeroPoint = 7, readonly minZeroPoint = -7) {}

  getZeroPoint(): number {
    return this.zeroPoint;
  }

  increaseZeroPoint() {
    if (this.zeroPoint < this.maxZeroPoint) {
      this.zeroPoint++;
    }
  }

  decreaseZeroPoint() {
    if (this.zeroPoint > this.minZeroPoint) {
      this.zeroPoint--;
    }
  }

  get(): number {
    return this.gaussianRandom.get() + this.zeroPoint;
  }
}
