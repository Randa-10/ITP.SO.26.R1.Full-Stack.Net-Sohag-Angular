import { Component } from '@angular/core';
import { Login } from '../../Services/login';
import { Iuser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-from-signup',
  imports: [FormsModule,CommonModule ],
  templateUrl: './template-from-signup.html',
  styleUrl: './template-from-signup.css',
})
export class TemplateFromSignup {
  u:Iuser={} as Iuser
constructor(private userService:Login){
// this.u = {
//   name:'ali',
//   email:'email',
//   password:'pass'
// }

}

AddUser(){
  this.userService.AddNewUser(this.u).subscribe((data)=>{
    console.log(data);
    
  })
}
}
