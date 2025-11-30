import { Component } from '@angular/core';
import { CardStyle } from '../../directives/card-style';
import { RouterLink, RouterModule } from "@angular/router";
import { UserAuth } from '../../Services/user-auth';

@Component({
  selector: 'app-navbar',
  imports: [CardStyle, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isUserLogged:boolean=false
constructor(private auth:UserAuth){
// this.isUserLogged=this.auth.loginAuth
this.auth.methodSubj().subscribe((data)=>
{
  this.isUserLogged=data
})
}
}
