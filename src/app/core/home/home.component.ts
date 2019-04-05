import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';
import { AlertMessage } from '../../shared/models/alert-message.model';

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
