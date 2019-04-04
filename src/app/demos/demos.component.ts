import { Component, OnInit } from '@angular/core';
import { AlertMessage } from '../models/alert-message.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  types = ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'warning'];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onNewMessageClick() {
    const randType = this.types[Math.floor(Math.random() * 7)]
    const alert = new AlertMessage(randType, 'Spam message!');
    this.messageService.displayAlert(alert);
  }

}
