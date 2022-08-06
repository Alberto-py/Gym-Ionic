import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rutinas } from '../models/rutinas.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebasesRutinasService {

  Collections: AngularFirestoreCollection<Rutinas>;
  // Array Rutinas
  listadoRutinas: Observable<Rutinas[]>;

  constructor(private firestore: AngularFirestore) {
    this.Collections = firestore.collection<Rutinas>('rutinas');
    this.listadoRutinas = this.Collections.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id =a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  getRutinas(){
    return this.listadoRutinas;
  }

  getRutina(id:string){
    return this.Collections.doc<Rutinas>(id).valueChanges();
  }

  updateRutina(listadoRutinas:Rutinas, id:string){
    return this.Collections.doc(id).update(listadoRutinas)
  }

  addRutina(listadoRutinas:Rutinas){
    return this.Collections.add(listadoRutinas);
  }

  removeRutina(id:string){
    return this.Collections.doc(id).delete();
  }
}
