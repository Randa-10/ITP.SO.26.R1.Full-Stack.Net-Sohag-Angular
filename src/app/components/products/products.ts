import { Unsubscribable } from './../../../../Server/node_modules/type-fest/source/observable-like.d';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, viewChild } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardStyle } from '../../directives/card-style';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { ProductsWithApi } from '../../Services/products-with-api';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, CardStyle,DiscountPipe,RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit , OnDestroy , AfterViewInit{
  //array ts
  // productProp: Iproduct[]=[];
  // productProp: Iproduct[]=[] as Iproduct[];
  productProp!: Iproduct[];    //non null


  totalOrderPrice: number = 0;
  userName: string = 'ali';

  date:Date=new Date()
  dataResponse!:Subscription
  // @viewChild('input') input:unknown
  //any , unknown
  constructor(private prdService:ProductsWithApi ,private cdn:ChangeDetectorRef ) {
    // this.productProp = [
    //   {
    //     id: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 1,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 2,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 2,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 3,
    //     productName: 'Apple iPhone 13',
    //     productImgURl: 'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&width=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     catatId: 1,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 4,
    //     productName: 'Samsung Galaxy ',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     catatId: 2,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 5,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 2,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 6,
    //     productName: 'iphone',
    //     productImgURl: 'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 2,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 7,
    //     productName: 'iphone',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 3,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 8,
    //     productName: 'Reno 11F',
    //     productImgURl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 1,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     id: 9,
    //     productName: 'iphone',
    //     productImgURl: 'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     catatId: 1,
    //     productsDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    // ];
    //step5
    // this.productsAfterSearch = this.productProp;
  }
  ngAfterViewInit(): void {
  
  }
  ngOnDestroy(): void {
this.dataResponse.unsubscribe()
  }

  ngOnInit(): void {
    //observer
// this.prdService.getAllProducts().subscribe({
//   next:()=>{

//   },complete:()=>{

//   },error:()=>{

//   }
// })

this.dataResponse=this.prdService.getAllProducts().subscribe((data)=>{
  console.log(data);  //[]
this.productProp=data
this.productsAfterSearch = this.productProp;
this.cdn.detectChanges()
})

  }
  addtocart(qty: string, price: number) {
    // Number(qty)
    // parseInt(qty)
    this.totalOrderPrice += +qty * price;
  }
  //set , get
  //step4
  productsAfterSearch: Iproduct[] = [];
  //step3
  @Input() set FilterByNameInChild(valParam: string) {
    //as afunction
    // this.productsAfterSearch = this.searchProducts(valParam);
    // console.log(this.searchProducts(valParam));
    //Day5
    this.prdService.getAllProducts().subscribe((data)=>{
     this.productsAfterSearch =data.filter((prd:Iproduct)=>prd.productName.toLowerCase().includes(valParam.toLowerCase()))
    this.cdn.detectChanges()
    })
  }
  //step2
  // searchProducts(value: string): Iproduct[] {
  //   value = value.toLowerCase();
  //   return this.productProp.filter((prdObj: Iproduct) =>
  //     prdObj.productName.toLowerCase().includes(value)
  //   );
  // }
  //Day4

  //1-create event
  //prop:EventEmitter<interface>=intial


 @Output() productEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();

  addToCartINChild(prd: Iproduct) {
    //2-fire event  emit
    this.productEvent.emit(prd);
  }
}
