import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  hamburgerDropdownOpen = false;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  toggleNavHamburgerDropdown() {
    this.hamburgerDropdownOpen = !this.hamburgerDropdownOpen;
  }

}
