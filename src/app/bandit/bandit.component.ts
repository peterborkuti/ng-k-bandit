import { Component, OnInit, Input } from '@angular/core';
import { BoxMuller } from './gaussianrandom';
import { Bandits } from './bandits';
import { Agent01 } from './agent01';

@Component({
  selector: 'app-bandit',
  templateUrl: './bandit.component.html',
  styleUrls: ['./bandit.component.css']
})
export class BanditComponent implements OnInit {
  @Input() n = 7;
  bandits = new Bandits();
  agent = new Agent01(this.bandits);

  constructor() { }

  ngOnInit() {
    this.bandits = new Bandits(this.n);
    this.agent = new Agent01(this.bandits, this.n);
  }
}
