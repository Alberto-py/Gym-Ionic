import { Component } from '@angular/core';

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
    foto:"image.png",
    nombreCategoria:"ejercicioconcuerda"
  },
  {
    foto:"https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    nombreCategoria:"ejercicioconmancuernas"
  }
]
  fakeArray =[1,1,1,1,1,1];
  constructor() {}

}
