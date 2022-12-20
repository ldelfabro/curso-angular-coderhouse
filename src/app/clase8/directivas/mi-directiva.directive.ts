import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { Alumno } from '../../clase5/alumno';


@Directive({
  selector: '[appMiDirectivaTest]'
})
export class MiDirectivaDirective implements OnInit {

 // @Input('alumno') alumno: Alumno;

  constructor(  private elemento : ElementRef,private renderer : Renderer2) { 
  }

    ngOnInit(): void {
      this.renderer.setStyle(this.elemento.nativeElement, 'color', 'red');
   /*   if(this.alumno.Calificacion > 5){
        this.renderer.setStyle(this.elemento.nativeElement, 'color', 'green');
        return;
      }
      else{
        this.renderer.setStyle(this.elemento.nativeElement, 'color', 'red');
        return;
      }
    */
    }

}