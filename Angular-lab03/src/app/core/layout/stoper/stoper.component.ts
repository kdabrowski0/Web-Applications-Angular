import { Component } from '@angular/core';

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.scss']
})
export class StoperComponent {
  counter = 0
  interval: any;

  startCounter(){
    this.interval = setInterval(() => {
      this.counter += 1
    }, 1000);
  }
  stopCounter(){
    clearInterval(this.interval)
  }
  clearCounter(){
    this.counter = 0
    clearInterval(this.interval)
  }
}
