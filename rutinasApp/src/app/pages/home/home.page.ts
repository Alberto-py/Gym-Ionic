import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView:2.5
  };

  categorias = [
    {
      imagen: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      nombreCategoria:'Cuerda'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      nombreCategoria:'Pesas'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      nombreCategoria:'Barra'
    }
  ]

  fakeArray = [1,1,1,1,1,1];
  constructor(public router:Router) {}

  goToSearchPage() {
    this.router.navigate(['search-page']);
  }

  goToCategoriesPage() {
    this.router.navigate(['rutinas-categoria']);
  }

}//Clase
