import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const password = this.loginForm.value['password'];
    const emailAddress = this.loginForm.value['email'];
    if (this.loginForm.submitted && this.loginForm.valid) {
      this.authService.login(emailAddress, password);
    }
  }

}
