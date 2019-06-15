import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring/monitoring.component';
import {NewFermentationComponent} from './new-fermentation/new-fermentation.component';
import { FermentationListComponent } from './fermentation-list/fermentation-list.component';
import { FermentationDetailComponent } from './fermentation-detail/fermentation-detail.component';

const routes: Routes = [
  {path: '', component: MonitoringComponent,
  children: [
    {path: 'fermentation-list', component: FermentationListComponent},
    {path: 'fermentation-detail/:id', component: FermentationDetailComponent},
    {path: 'new-brew', component: NewFermentationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
