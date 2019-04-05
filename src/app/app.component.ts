import { Component, OnInit } from '@angular/core';
import { MessageService } from './shared/services/message.service';
import { AlertMessage } from './shared/models/alert-message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brew-monitor';

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const welcomeMessage = new AlertMessage('primary', 'Welcome to the app! Please log in.');
    this.messageService.displayAlert(welcomeMessage);
  }
}
