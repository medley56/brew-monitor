import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring/monitoring.component';
import {NewFermentationComponent} from './new-fermentation/new-fermentation.component';

const routes: Routes = [
  {path: '', component: MonitoringComponent},
  {path: 'new-brew', component: NewFermentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
