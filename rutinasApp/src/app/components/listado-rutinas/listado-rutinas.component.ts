import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutinas } from '../../models/rutinas.interface';
import { FirebasesRutinasService } from '../../services/firebases-rutinas.service';

@Component({
  selector: 'app-listado-rutinas',
  templateUrl: './listado-rutinas.component.html',
  styleUrls: ['./listado-rutinas.component.scss'],
})
export class ListadoRutinasComponent implements OnInit {

  @Input() listadoRutinas: Rutinas[];

  constructor( public router: Router, private firebaseService: FirebasesRutinasService) { }
   ngOnInit() {}

  goToDetallePage(rutina: Rutinas) {
    this.firebaseService.getRutinaDetalle(rutina);
    this.router.navigate(['rutinas-detalles']);
  }


}
