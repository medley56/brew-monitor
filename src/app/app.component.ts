import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { AlertMessage } from './models/alert-message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brew-monitor';

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const previousUser = <User>JSON.parse(localStorage.getItem('user'));
    let welcomeMessage: AlertMessage;

    if (previousUser) {
      this.authService.currentUser.next(previousUser);
      welcomeMessage = new AlertMessage('primary', `Welcome back ${previousUser.firstName} ${previousUser.lastName}!`);
    } else {
      welcomeMessage = new AlertMessage('primary', 'Welcome to the app! Please log in.');
    }

    this.messageService.displayAlert(welcomeMessage);
  }
}
