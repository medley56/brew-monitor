import { Component, OnInit } from '@angular/core';
import { BrewMonitorApiService } from '../../shared/services/brew-monitor-api.service';
import { Fermentation } from '../../shared/models/api-models.model';

@Component({
  selector: 'app-fermentation-list',
  templateUrl: './fermentation-list.component.html',
  styleUrls: ['./fermentation-list.component.css']
})
export class FermentationListComponent implements OnInit {
  fermentationList: Fermentation[];

  constructor(
    private apiService: BrewMonitorApiService
  ) { }

  ngOnInit() {
    this.apiService.getFermentationList(true).subscribe((list: Fermentation[]) => {
      this.fermentationList = list;
      console.log(list);
    });
  }

}
