import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebasesRutinasService } from '../../services/firebases-rutinas.service';
import { Rutinas } from '../../models/rutinas.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  ngOnInit() {
    /*this.firebaseService.getRutinas().subscribe(res => {
      this.listadoRutinas = res;
    });*/
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView:2.5
  };

  categorias = [
    {
      imagen: 'https://img.freepik.com/fotos-premium/torso-musculoso-masculino_144962-3859.jpg?w=2000',
      nombreCategoria:'Tronco'
    },
    {
      imagen: 'https://previews.123rf.com/images/antondotsenko/antondotsenko1711/antondotsenko171100301/89208810-guapo-musculoso-hombre-cauc%C3%A1sico-de-apariencia-modelo-trabajando-brazos-de-entrenamiento-en-el-gimna.jpg',
      nombreCategoria:'Extremidad Superior'
    },
    {
      imagen: 'https://st3.depositphotos.com/6944362/17233/i/600/depositphotos_172332518-stock-photo-close-up-of-bodybuilders-muscular.jpg',
      nombreCategoria:'Extremidad Inferior'
    }
  ]


  constructor(public router:Router, private firebaseService: FirebasesRutinasService) {
    this.firebaseService.cargarRutinas();
  }

  goToSearchPage() {
    this.router.navigate(['search-page']);
  }

  goToCategoriesPage(categorieSelected: string) {
    this.firebaseService.categorieSelected = categorieSelected;
    this.firebaseService.filtrarCategory(categorieSelected);
    this.router.navigate(['rutinas-categoria']);
  }

}//Clase
