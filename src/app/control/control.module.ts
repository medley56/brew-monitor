import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control/control.component';
import { ControlRoutingModule } from './control-routing.module';

@NgModule({
  declarations: [ControlComponent],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
