import { Component } from '@angular/core';
import { AlertService } from './alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  message: string | null = null;

  constructor(private alertService: AlertService) {
    alertService.getAlerts().subscribe((message) => {
      this.message = message;
    });
  }

  closeAlert() {
    this.alertService.hideAlert();
  }
}
