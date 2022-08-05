import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasDetallesPageRoutingModule } from './rutinas-detalles-routing.module';

import { RutinasDetallesPage } from './rutinas-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasDetallesPageRoutingModule
  ],
  declarations: [RutinasDetallesPage]
})
export class RutinasDetallesPageModule {}
