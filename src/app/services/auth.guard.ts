import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.currentUser
      .subscribe(
        (user: User) => {
          this.user = user;
        }
      );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user && this.user.authToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
