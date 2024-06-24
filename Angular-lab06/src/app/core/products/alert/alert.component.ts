import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() public message!: string;
  @Output() public closeClicked: EventEmitter<void> = new EventEmitter<void>();

  public onClose(): void {
    this.closeClicked.emit();
  }
}
