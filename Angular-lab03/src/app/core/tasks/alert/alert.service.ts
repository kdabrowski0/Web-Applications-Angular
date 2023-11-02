import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<string | null>(null);

  getAlerts() {
    return this.alertSubject.asObservable();
  }

  showAlert(message: string) {
    this.alertSubject.next(message);
  }

  hideAlert() {
    this.alertSubject.next(null);
  }
}
