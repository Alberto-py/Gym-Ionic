export interface Rutinas{
  nombre:string;
  imagen:string;
  descripcion:string;
  series:number;
  repeticiones:string;
  descanso:string;
  tip:string;
  sugerencias:Array<Sugerencias>;
  categoria:string;
}

export interface Sugerencias{
  nombre:string;
  imagenEjercicio:string;
}
