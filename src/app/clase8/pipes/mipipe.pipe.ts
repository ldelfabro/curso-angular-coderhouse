import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe2'
})
export class MipipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
   if(args[1] != null && args[1] != undefined){
    return args[1]
   }
   if(args[0] == "?"){
    return "ES UNA PREGUNTA?"
   }


    return value.toUpperCase();
  }

}
