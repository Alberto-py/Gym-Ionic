import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasCategoriaPageRoutingModule } from './rutinas-categoria-routing.module';

import { RutinasCategoriaPage } from './rutinas-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasCategoriaPageRoutingModule
  ],
  declarations: [RutinasCategoriaPage]
})
export class RutinasCategoriaPageModule {}
