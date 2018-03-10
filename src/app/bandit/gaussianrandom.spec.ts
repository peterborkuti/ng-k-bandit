import { BoxMuller } from './gaussianrandom';
import { isNumber } from 'util';
import { async } from '@angular/core/testing';

describe('BoxMuller', () => {
  const bm: BoxMuller = new BoxMuller();

  const printHistogram = function(o) {
      Object.keys(o).forEach(function(v) {
          console.log(v + ':' + o[v]);
      });
  };

  it('should give a number', () => {
     expect(isNumber(bm.get())).toBeTruthy();
  });

  it('should give a gaussian frequency', async(() => {
    const histogram = {};

    let max = 0;
    let maxIndex = '';

    for (let i = 0; i < 100000; i++) {
        const g = bm.get();
        const key = '' + Math.floor(g * 5);

        if (!histogram.hasOwnProperty(key)) { histogram[key] = 0; }

        histogram[key]++;

        if (histogram[key] > max) {
            max = histogram[key];
            maxIndex = key;
        }
    }

    // printHistogram(histogram);

    expect(max > 700).toBeTruthy();
    expect(Math.abs(+maxIndex) < 3).toBeTruthy();
  }));
});
