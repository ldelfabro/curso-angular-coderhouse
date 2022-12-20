import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainer : ViewContainerRef

  ) { }

  @Input() set appRepetir(number: number){

    for(var i = 0; i < number; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

  }

}
