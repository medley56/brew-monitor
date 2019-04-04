import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  hamburgerDropdownOpen = false;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUserSubscription = this.authService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
      }
    );
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  toggleNavHamburgerDropdown() {
    this.hamburgerDropdownOpen = !this.hamburgerDropdownOpen;
  }

  onLogout() {
    this.authService.logout();
  }

}
