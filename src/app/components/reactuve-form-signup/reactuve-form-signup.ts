import { Component } from '@angular/core';
import { LogicFn } from '@angular/forms/signals';
import { Login } from '../../Services/login';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserAuth } from '../../Services/user-auth';

@Component({
  selector: 'app-reactuve-form-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactuve-form-signup.html',
  styleUrl: './reactuve-form-signup.css',
})
export class ReactuveFormSignup {
  //step1
userFormGroup:FormGroup
isUserLogged:boolean=false
constructor(private userServ:Login ,private Auth:UserAuth){
this.userFormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})


this.isUserLogged=this.Auth.loginAuth
}
get  nameMethod(){
  return  this.userFormGroup.get('name')
}
AddNewUser(){
  this.userServ.AddNewUser(this.userFormGroup.value).subscribe((data)=>{console.log(data);}
  )
}
//////////
login(){
this.Auth.login("ali","1233")
this.isUserLogged=this.Auth.loginAuth
}

logout(){
this.Auth.logout()
this.isUserLogged=this.Auth.loginAuth
}
}
