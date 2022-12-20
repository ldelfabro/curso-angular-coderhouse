import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css']
})
export class HijoUnoComponent implements OnInit {

  @Input() alumno : Alumno;
  @Output() seleccionado = new EventEmitter<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar() : void {
      this.seleccionado.emit(this.alumno);
  }

}