import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alert {
  type: 'success' | 'error' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    private alertSubject = new BehaviorSubject<Alert | null>(null);
    alert$ = this.alertSubject.asObservable();
  
    showAlert(alert: Alert) {
      this.alertSubject.next(alert);

      setTimeout(() => this.clearAlert(), 8000);
    }
  
    clearAlert() {
      this.alertSubject.next(null);
    }
  }