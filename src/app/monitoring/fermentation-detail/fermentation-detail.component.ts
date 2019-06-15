import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrewMonitorApiService } from '../../shared/services/brew-monitor-api.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Datapoint, Dataset, Fermentation } from '../../shared/models/api-models.model';

@Component({
  selector: 'app-fermentation-detail',
  templateUrl: './fermentation-detail.component.html',
  styleUrls: ['./fermentation-detail.component.css']
})
export class FermentationDetailComponent implements OnInit {
  fermentation: Fermentation;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: BrewMonitorApiService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const fermentation$ = this.apiService.getFermentationById(id);

    const data$ = fermentation$.pipe(
      switchMap((source: Fermentation) => {
        return forkJoin(source.datasets.map((datasetUrl: string) => {
          return this.http.get<Dataset>(datasetUrl).pipe(
            switchMap((dataset: Dataset) => {
              return forkJoin(dataset.datapoints.map((datapointUrl: string) => {
                return this.http.get<Datapoint>(datapointUrl);
              })).pipe(
                map((datapoints: Datapoint[]) => {
                  return {...dataset, datapoints: datapoints};
                })
              );
            })
          );
        })).pipe(
          map((results: Dataset[]) => {
            return {...source, datasets: results};
          })
        );
      })
    );

    // const data$ = fermentation$.pipe(
    //   switchMap((source: Fermentation) => {
    //     return forkJoin(source.datasets.map((endpoint: string) => {
    //       return this.http.get<Dataset>(endpoint);
    //     })).pipe(
    //       map((results: Dataset[]) => {
    //         return {...source, datasets: results};
    //       })
    //     );
    //   })
    // );

    data$.subscribe((fermentation: Fermentation) => {
      this.fermentation = fermentation;
      console.log(this.fermentation);
    });
  }

}
