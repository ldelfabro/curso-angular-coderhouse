import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css']
})
export class HijoDosComponent implements OnInit {

  public alumno : Alumno = {
    Nombre : 'Ed',
    Calificacion : 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() : void 
  {
    alert(this.alumno.Nombre)
  }
  
}
