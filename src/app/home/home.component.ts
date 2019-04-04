import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AlertMessage } from '../models/alert-message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
