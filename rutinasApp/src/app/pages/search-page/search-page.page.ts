import { Component, OnInit } from '@angular/core';
import { FirebasesRutinasService } from '../../services/firebases-rutinas.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  constructor(private firebaseService: FirebasesRutinasService) {
    this.firebaseService.cargarRutinas();
  }

  ngOnInit() {
  }

  buscarRutina(event){
    var nombre = event.detail.value;
    this.firebaseService.searchRutina(nombre);
  }

}
