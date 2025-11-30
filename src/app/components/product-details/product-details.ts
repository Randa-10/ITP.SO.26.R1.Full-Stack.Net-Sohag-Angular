import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsWithApi } from '../../Services/products-with-api';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  currentId: number = 0;
  propObjProduct!: Iproduct;
  //step1:get id from url

  constructor(
    private active: ActivatedRoute,
    private prdService: ProductsWithApi,
    private cdn: ChangeDetectorRef
  ) {
    this.active.params.subscribe((data) => {
      //data url  ==> id
      this.currentId = data['idFromDB'];
      console.log(this.currentId);

      //step=>send id method
      this.prdService.getProductById(this.currentId).subscribe((data) => {
        console.log(data);
        this.propObjProduct = data;
        this.cdn.detectChanges();
      });
    });
  }
}
