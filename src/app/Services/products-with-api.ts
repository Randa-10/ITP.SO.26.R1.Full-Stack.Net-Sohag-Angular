import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApi {
//endpoint products  http://localhost:3000/products
//call products
//HttpClient==> get , put , post
constructor( private http:HttpClient  ){

}
getAllProducts():Observable<Iproduct[]>{
//method get
//http.get<>(ur)
return this.http.get<Iproduct[]>(`${environment.baseURl}/products`)
}
getProductById(param:number):Observable<Iproduct>{
  return this.http.get<Iproduct>(`${environment.baseURl}/products/${param}`)

}

//query string   url?productName=value
search(vaule:string):Observable<Iproduct[]>{
  return  this.http.get<Iproduct[]>(`${environment.baseURl}/products?productName=${vaule}`)
}
}
