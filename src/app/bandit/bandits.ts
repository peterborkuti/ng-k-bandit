import { Bandit } from './bandit';

export class Bandits {
  bandits: Bandit[];

  constructor(readonly n = 7) {
    this.bandits = new Array(this.n);

    for (let i = 0; i < this.n; i++) {
      this.bandits[i] = new Bandit();
    }
  }
}
