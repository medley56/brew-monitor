import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { MessageService } from './message.service';
import { AlertMessage } from '../models/alert-message.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = new BehaviorSubject<User | null>(null);
  authToken = new BehaviorSubject<string | null>(null);

  constructor(
    private messageService: MessageService,
    private router: Router,
    private http: HttpClient
  ) { }

  login(emailAddress: string, password: string) {
    console.log('logging in');
    this.http.post('http://localhost:8008/api/auth/login/', {email: emailAddress, password: password})
      .subscribe(
        (token: string) => {
          console.log(token);
          this.authToken.next(token['key']);
          console.log(this.authToken.getValue());
          this.storeCurrentUser();
        }
      );

    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.next(null);
    this.messageService.displayAlert(new AlertMessage('primary', 'Successfully logged out!'));
    this.router.navigate(['/login']);
  }

  storeCurrentUser() {
    if (!this.authToken.getValue()) {
      this.messageService.displayAlert(
        new AlertMessage('danger', 'No user is currently authenticated.')
      );
      return null;
    } else {
      console.log('getting user data');
      const authHeaders = new HttpHeaders({'Authorization': `Token ${this.authToken.getValue()}`});
      this.http.get('http://localhost:8008/api/auth/user/', {headers: authHeaders})
        .subscribe(
          (user: User) => {
            console.log(user);
            this.currentUser.next(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        );
    }
  }
}
