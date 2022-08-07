import { Component, Input, OnInit } from '@angular/core';
import { FirebasesRutinasService } from '../../services/firebases-rutinas.service';
import { Rutinas } from '../../models/rutinas.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutinas-categoria',
  templateUrl: './rutinas-categoria.page.html',
  styleUrls: ['./rutinas-categoria.page.scss'],
})
export class RutinasCategoriaPage implements OnInit {

  constructor(private firebaseService: FirebasesRutinasService) { }

  ngOnInit() {
  }

}
