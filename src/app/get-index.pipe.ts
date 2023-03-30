import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIndex'
})
export class GetIndexPipe implements PipeTransform {

  transform(value: string): number {
    
   // let x= parseInt(value,10);
    let x= Number(value)+1;
   
    
return x;
  }

}
