import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { NewFermentationComponent } from './new-fermentation/new-fermentation.component';
import { FermentationListComponent } from './fermentation-list/fermentation-list.component';
import { FermentationDetailComponent } from './fermentation-detail/fermentation-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MonitoringComponent,
    NewFermentationComponent,
    FermentationListComponent,
    FermentationDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonitoringRoutingModule
  ]
})
export class MonitoringModule { }
