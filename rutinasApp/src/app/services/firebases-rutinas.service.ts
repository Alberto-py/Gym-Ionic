import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Rutinas } from '../models/rutinas.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebasesRutinasService {

  // Array Rutinas
  listadoRutinas: Rutinas[] = [];

  //Categorias
  listadoCategory: Rutinas[] = [];
  categorieSelected: string = "";

  //Buscar Rutinas
  listadoBuscar: Rutinas[] = [];

  constructor(private firestore: AngularFirestore) {
    /*this.Collections = firestore.collection<Rutinas>('rutinas');
    this.listadoRutinas = this.Collections.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id =a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));*/
  }

  cargarRutinas(){
    this.firestore.collection('rutinas')
                  .valueChanges()
                  .pipe(
                    map( (rutinas: Array<Rutinas>) => {
                      this.listadoRutinas = rutinas;
                    })
                  ).subscribe();
  }

  filtrarCategory(categorieSelected:string){
    this.listadoCategory = [];
    this.listadoRutinas.forEach( (rutina:Rutinas) => {
      if(rutina.categoria == categorieSelected){
        this.listadoCategory.push(rutina);
      }
    });
  }

  searchRutina(nombre: string){
    this.listadoBuscar = this.listadoRutinas;
    if(nombre && nombre.trim() !== ""){
      this.listadoBuscar = this.listadoBuscar.filter( rutina => {
        return rutina.nombre.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
      });
    } else{
      //Input Vacio
      this.listadoBuscar = [];
    }
  }

}
