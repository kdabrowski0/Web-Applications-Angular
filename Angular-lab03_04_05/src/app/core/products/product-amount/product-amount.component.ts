import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.scss']
})
export class ProductAmountComponent {
  @Input() public amount: number = 1;
  @Output() public incrementEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() public  decrementEvent: EventEmitter<void> = new EventEmitter<void>();

  public increment(): void {
    this.incrementEvent.emit();
  }

  public decrement(): void {
    this.decrementEvent.emit();
  }

} 
