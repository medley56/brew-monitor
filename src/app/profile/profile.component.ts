import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AlertMessage } from '../models/alert-message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild('userEditForm') userEditForm: NgForm;
  @ViewChild('passwordChangeForm') passwordChangeForm: NgForm;
  private currentUser: User;
  private currentUserSubscription: Subscription;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUserSubscription = this.authService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        }
      );
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  onUserEditSubmit() {
    if (this.userEditForm.valid) {
      const changedUser = <User>{...this.currentUser};
      changedUser.lastName = this.userEditForm.value.lastName;
      changedUser.firstName = this.userEditForm.value.firstName;
      this.authService.currentUser.next(changedUser);

      const savedMessage = new AlertMessage('success', 'Saved! (fake)');
      this.messageService.displayAlert(savedMessage);
    }
  }

  onPasswordChangeSubmit() {
    if (this.passwordChangeForm.valid) {
      const pwChangedMessage = new AlertMessage('success', 'Password changed! (fake)');
      this.messageService.displayAlert(pwChangedMessage);
      this.passwordChangeForm.resetForm();
    }
  }

}
