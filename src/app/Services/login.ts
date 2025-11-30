import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { map, Observable, retry } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Login {
  //call end point  http://localhost:3000/users
  //login
  //signup
  //post (url , {name , email ,pass}, {headers:})

  headersProp = {};
  constructor(private http: HttpClient) {
    this.headersProp = {
      headers: new HttpHeaders({
        // 'Content-Type':'application/json',
        // "Auth"
      }),
    };
  }

  AddNewUser(userObj: Iuser): Observable<Iuser> {
    //post<>(url,body,hearders`)
    return this.http
      .post<Iuser>(`${environment.baseURl}/users`, userObj, this.headersProp)
      .pipe(retry(3));
  }
}
