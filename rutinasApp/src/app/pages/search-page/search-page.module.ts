import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPagePageRoutingModule } from './search-page-routing.module';

import { SearchPagePage } from './search-page.page';
import { ListadoRutinasComponent } from "../../components/listado-rutinas/listado-rutinas.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPagePageRoutingModule
  ],
  declarations: [SearchPagePage, ListadoRutinasComponent],
  entryComponents: [ListadoRutinasComponent]
})
export class SearchPagePageModule {}
