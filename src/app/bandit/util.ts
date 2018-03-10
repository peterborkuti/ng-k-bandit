export class Util {
  static argmax(a: number[]) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;

    for (let i = 0; i < a.length; i++) {
      if (a[i] > max) {
        maxIndex = i;
        max = a[i];
      }
    }

    return maxIndex;
  }
}
