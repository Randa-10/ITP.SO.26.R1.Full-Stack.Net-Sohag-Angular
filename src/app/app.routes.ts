import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ParentComponent } from './components/parent-component/parent-component';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import { TemplateFromSignup } from './components/template-from-signup/template-from-signup';
import { ReactuveFormSignup } from './components/reactuve-form-signup/reactuve-form-signup';
import { authGuard } from './Gaurds/auth-guard';

export const routes: Routes = [


//path   localhost:4200  /
//default route  localhost:4200/
{path:'',redirectTo:'home',pathMatch:'full'},
// localhost:4200/home

{path:'home',component:Home,title:'home page'},
//localhost:4200/products-parent
{path:'products',component:ParentComponent,title:'products',canActivate:[authGuard]},
//dynamicx route  static/:anyname
{path:'products/:idFromDB',component:ProductDetails},
// {path:'signup',component:TemplateFromSignup}
{path:'signup',component:ReactuveFormSignup}


//notfound

//wildcard route
,{
  path:'**',
  component:Notfound
}
];
