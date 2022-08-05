import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasCategoriaPageRoutingModule } from './rutinas-categoria-routing.module';

import { RutinasCategoriaPage } from './rutinas-categoria.page';
import { ListadoRutinasComponent } from '../../components/listado-rutinas/listado-rutinas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasCategoriaPageRoutingModule
  ],
  declarations: [RutinasCategoriaPage, ListadoRutinasComponent],
  entryComponents: [ListadoRutinasComponent]
})
export class RutinasCategoriaPageModule {}
