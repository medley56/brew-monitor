import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { concat, merge, Observable } from 'rxjs';
import { Fermentation } from '../models/fermentation.model';
import { Dataset } from '../models/dataset.model';

@Injectable({
  providedIn: 'root'
})
export class BrewMonitorApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getFermentationById(id: number): Observable<Fermentation> {
    return this.http.get<Fermentation>(this.baseUrl + '/fermentations/' + id);
  }

  getFermentationList(): Observable<Fermentation[]> {
    return this.http.get<Fermentation[]>(this.baseUrl + '/fermentations/');
  }

  createNewFermentation(newFermentation: Fermentation, newDatasets: Dataset[]): Observable<Fermentation> {
    // First create datasets, then create Fermentation, associated with those datasets
    const datasetPosts = [];
    newDatasets.forEach((ds, idx, arr) => {
      datasetPosts.push(this.http.post<Dataset>(this.baseUrl + '/datasets/', ds));
    });
    return concat(
      merge(datasetPosts),
      this.http.post<Fermentation>(this.baseUrl + '/fermentations/', newFermentation)
    );
  }
}
