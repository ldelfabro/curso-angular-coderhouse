import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public nombre : string;
  public apellido : string;
  public personas = ['Leandro', 'Pepe', 'Roberto', 'Mariano']
  public valorString:string;
  public bandera = false;
  public hoy = new Date();
  constructor() { }

  ngOnInit() : void {
    this.nombre =  "";
  }

  decirHola() : void{
    alert('Estoy diciendo HOLA');
  }
  verDatos() : void {
    console.log('Nombre: ' + this.apellido + ' Apellido : ' + this.nombre);
  }
  cargarDatos() : void {
    this.nombre = "Leandro";
    this.apellido = "Delfabro";
  }
}