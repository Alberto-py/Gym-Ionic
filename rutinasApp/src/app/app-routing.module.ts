import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rutinas-categoria',
    loadChildren: () => import('./pages/rutinas-categoria/rutinas-categoria.module').then( m => m.RutinasCategoriaPageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'rutinas-detalles',
    loadChildren: () => import('./pages/rutinas-detalles/rutinas-detalles.module').then( m => m.RutinasDetallesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
