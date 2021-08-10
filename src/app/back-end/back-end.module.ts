import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MicroserviciosComponent } from '../back-end/microservicios/microservicios.component';

const routes: Routes = [
    { path: "microservicios" , component: MicroserviciosComponent },// canactivate
  ];

@NgModule({
  declarations: [MicroserviciosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class BackEndModule { }
