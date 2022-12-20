import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../clase5/alumno';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): string {

    return "Alumno: " + value.Nombre + " con calificación: " + value.Calificacion;
  }

}
