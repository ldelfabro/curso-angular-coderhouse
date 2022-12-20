import { AfterViewInit, Component, OnInit,  ViewChild } from '@angular/core';
import { Alumno } from '../alumno';
import { HijoDosComponent } from '../hijo-dos/hijo-dos.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit, AfterViewInit {

  public alumnos : Alumno[] = [];

  public seleccionado : Alumno = { Nombre : "", Calificacion : 0};
  @ViewChild(HijoDosComponent, {static : false}) hijoDos : HijoDosComponent;

  constructor() { }

  ngOnInit(): void {
    
    this.alumnos.push( {Nombre: 'Pepe1', Calificacion : 4});
    this.alumnos.push( {Nombre: 'Pepe2', Calificacion : 1});
    this.alumnos.push( {Nombre: 'Pepe3', Calificacion : 8});
    this.alumnos.push( {Nombre: 'Pepe4', Calificacion : 10});

  }
  //el after view init es algo parecido al Window.onload. Lo necesitamos para poder usar ViewChild ya que necesitamos
  //que el componente esté cargado
  ngAfterViewInit(): void {
    
    console.log(this.hijoDos.alumno.Nombre);
    this.hijoDos.sayHello();
  }


  alumnoSeleccionado(alumno: Alumno) : void {
    this.seleccionado = alumno;
  }


}
