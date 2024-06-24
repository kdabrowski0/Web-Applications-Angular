import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input() public visible: boolean = false;
  @Output() public closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  public closeModal(): void {
    this.closeModalEvent.emit();
  }
}
