import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-rutinas',
  templateUrl: './listado-rutinas.component.html',
  styleUrls: ['./listado-rutinas.component.scss'],
})
export class ListadoRutinasComponent implements OnInit {

  fakeArray = [1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {}

}
