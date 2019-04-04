import { EventEmitter, Injectable } from '@angular/core';
import { AlertMessage } from '../models/alert-message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private alertMessages: AlertMessage[] = [
  ];
  alertUpdater = new EventEmitter<AlertMessage[]>();
  private messageTimeout = 7000;

  constructor() {
    setInterval(() => {
      this.alertMessages = this.alertMessages.filter(alertMessage => (Date.now() - alertMessage.createdAt) < this.messageTimeout);
      this.alertUpdater.emit(this.alertMessages.slice());
    }, 500);
  }

  getAlerts() {
    return this.alertMessages.slice();
  }

  displayAlert(newMessage: AlertMessage) {
    this.alertMessages.push(newMessage);
    this.alertUpdater.emit(this.alertMessages.slice());
  }

  dismissAlert(alertToDismiss: AlertMessage) {
    this.alertMessages = this.alertMessages.filter(alertMessage => alertMessage.createdAt !== alertToDismiss.createdAt);
    this.alertUpdater.emit(this.alertMessages.slice());
  }
}
