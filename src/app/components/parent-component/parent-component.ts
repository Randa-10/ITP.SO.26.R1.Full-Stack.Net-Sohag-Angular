import { Component } from '@angular/core';
import { Products } from '../products/products';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-parent-component',
  imports: [Products,FormsModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  FilterByNameINParent:string=" "
  prdListAarr:Iproduct[] = [];
  addToCartInParent(prd:Iproduct){
    // console.log(prd);
    // this.prdListAarr.push(prd)
   
    let obj=this.prdListAarr.find(prdoBJ=>prdoBJ.id==prd.id)
    if(obj){
      obj.productQuantity+=1
    }else{
      this.prdListAarr.push({...prd,productQuantity:1})
    }
     console.log(this.prdListAarr);
  }
}
