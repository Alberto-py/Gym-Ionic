import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listado-rutinas',
  templateUrl: './listado-rutinas.component.html',
  styleUrls: ['./listado-rutinas.component.scss'],
})
export class ListadoRutinasComponent implements OnInit {

  fakeArray = [1,1,1,1,1,1];

  constructor( public router: Router) { }
   ngOnInit() {}

  goTorDetallePage() {
    this.router.navigate(['rutinas-detalles']);
  }

 

}
