import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasDetallesPage } from './rutinas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasDetallesPageRoutingModule {}
