import { Bandits } from './bandits';
import { Util } from './util';
export class Agent01 {
  Q: number[];
  N: number[];

  constructor(readonly bandits: Bandits, readonly n = 7, readonly epsilon = 0.5) {
    this.Q = Array(n);
    this.N = Array(n);

    for (let i = 0; i < n; i++) {
      this.Q[i] = 0;
      this.N[i] = 0;
    }
  }

  step() {
    let action = Math.floor(Math.random() * this.n);
    if (Math.random() >= this.epsilon) {
      action = Util.argmax(this.Q);
    }

    const reward = this.bandits.bandits[action].get();

    this.N[action]++;
    this.Q[action] += (reward - this.Q[action]) / this.N[action];
  }
}
