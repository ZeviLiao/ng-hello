import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRouteComponent } from './my-route.component';



@NgModule({
  declarations: [MyRouteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyRouteComponent
  ]
})
export class MyRouteModule { }
