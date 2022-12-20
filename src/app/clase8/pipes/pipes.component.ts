import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../clase5/alumno';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public miPropiedad = "Hola mundo j3j3";
  public alumno : Alumno = {
    Nombre : "pepe",
    Calificacion : 3
  };
  public colecioAlumnos : Alumno[] = [
    {
      Nombre : "pepe 2",
      Calificacion : 11
    },
    {
      Nombre : "pepe 3",
      Calificacion : 12
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
