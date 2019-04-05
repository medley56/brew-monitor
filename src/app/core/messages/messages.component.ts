import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../shared/services/message.service';
import {AlertMessage} from '../../shared/models/alert-message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  alerts: AlertMessage[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.alerts = this.messageService.getAlerts();
    this.messageService.alertUpdater.subscribe(
      alerts => {
        this.alerts = alerts;
      }
    );
  }

  onAlertDismiss(alertMessage: AlertMessage) {
    this.messageService.dismissAlert(alertMessage);
  }

}
