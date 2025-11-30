import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
    //step3
  
  userSubj:BehaviorSubject<boolean>
  constructor(){
    //step4

    this.userSubj=new BehaviorSubject<boolean>(false)
  }

  // login ==>user pass
  //token
  //save 
  //logout ==> remove

  
  login(username:string,pass:string){
    //step1
//call post api login
let token="1234"
localStorage.setItem('myToken',token)
    //step5

this.userSubj.next(true)
  }
  logout(){
    //step2

    //call api logout
    localStorage.removeItem('myToken')
    //step6

    this.userSubj.next(false)
  }

 get loginAuth():boolean{
    return (localStorage.getItem('myToken'))?true:false
  }
  //step7
  methodSubj(){
    return this.userSubj
  }
}
