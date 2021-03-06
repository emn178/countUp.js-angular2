import { Component } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pickANumber = 7890;
  endVal: number;
  opts: CountUpOptions;

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    this.endVal = 0;
    setTimeout(() => this.endVal = this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5
    };
  }

  unsetOptions() {
    this.opts = null;
  }
}
