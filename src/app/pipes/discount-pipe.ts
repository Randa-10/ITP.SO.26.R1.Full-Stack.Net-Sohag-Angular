import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {

  transform(val:number,discount:number=25): number {
    let discValue=discount/100
    let  valAfterDisc=val-(val*discValue)
    return valAfterDisc;
  }

}
