import { Component } from '@angular/core';

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.scss']
})
export class StoperComponent {
  public counter: number = 0;
  public interval: any;

  public startCounter(): void{
    this.interval = setInterval(() => {
      this.counter += 1;
    }, 1000);
  }
  public stopCounter(): void{
    clearInterval(this.interval);
  }
  public clearCounter(): void{
    this.counter = 0;
    clearInterval(this.interval);
  }
}
