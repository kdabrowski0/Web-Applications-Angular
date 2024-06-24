import { Component } from '@angular/core';
@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.scss']
})
export class StatusComponentComponent {

  public setStatus(): void {
    localStorage.setItem('status', 'true');
  }

  public clearStatus(): void {
    localStorage.removeItem('status');
  }

}
