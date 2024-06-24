import { Component, OnInit } from '@angular/core';
import { DataEmitterService } from '../DataEmitterService.service';
import { tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [DataEmitterService],
})
export class DataComponent implements OnInit {
  public dataA: number | string = '';
  public dataB: number | string = '';
  public dataC: number | string = '';
  private dataSubscription: Subscription = new Subscription();

  public constructor(private dataEmitterService: DataEmitterService) {}

  public ngOnInit(): void {
    const subscriptionA: Subscription = this.dataEmitterService.dataSubject
      .pipe(
        tap((data: number | string) => console.log('Received data:', data)),
        map((data: number | string) => (this.dataA = data))
      )
      .subscribe();

    const subscriptionB: Subscription = this.dataEmitterService.dataSubject
      .pipe(
        map((data: number | string) => {
          if (typeof data === 'number') {
            return (this.dataB = data * 2);
          }
        })
      )
      .subscribe();
    const subscriptionC: Subscription = this.dataEmitterService.dataSubject
      .pipe(
        tap({
          next: (_data: number | string) =>
            console.log('Observable zakończony'),
          complete: () => console.log('Observable completed'),
        }),
        map((_data: number | string) => (this.dataC = _data))
      )
      .subscribe();

    this.dataSubscription = new Subscription();
    this.dataSubscription.add(subscriptionA);
    this.dataSubscription.add(subscriptionB);
    this.dataSubscription.add(subscriptionC);

    this.dataEmitterService.emitData(10);
    this.dataEmitterService.emitData(20);
    this.dataEmitterService.emitData(30);
    this.dataEmitterService.complete();
  }
}
