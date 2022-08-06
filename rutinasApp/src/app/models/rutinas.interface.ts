export interface Rutinas{
  nombre:string;
  imagen:string;
  descripcion:string;
  series:number;
  repeticiones:string;
  descanso:string;
  tip:string;
  sugerencias:Array<Sugerencias>;
}

export interface Sugerencias{
  nombre:string;
  imagenEjercicio:string;
}
