import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { FirebasesRutinasService } from '../../services/firebases-rutinas.service';
@Component({
  selector: 'app-rutinas-detalles',
  templateUrl: './rutinas-detalles.page.html',
  styleUrls: ['./rutinas-detalles.page.scss'],
})
export class RutinasDetallesPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView:3.5
  };

  fakeSugerencias = [1,1,1,1,1,1,1];

  constructor(public navCtrl: NavController, private firebaseService: FirebasesRutinasService) { }

  ngOnInit( ) {
  }
 goBack(){
  this.navCtrl.pop();

 }
}
