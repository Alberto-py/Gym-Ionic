import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutinas } from '../../models/rutinas.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-rutinas',
  templateUrl: './listado-rutinas.component.html',
  styleUrls: ['./listado-rutinas.component.scss'],
})
export class ListadoRutinasComponent implements OnInit {

  @Input() listadoRutinas: Rutinas[];

  constructor( public router: Router) { }
   ngOnInit() {}

  goToDetallePage() {
    this.router.navigate(['rutinas-detalles']);
  }


}
