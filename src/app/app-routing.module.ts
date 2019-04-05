import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'control', loadChildren: './control/control.module#ControlModule'},
  {path: 'monitoring', loadChildren: './monitoring/monitoring.module#MonitoringModule'},
  {path: 'archive', loadChildren: './archive/archive.module#ArchiveModule'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
