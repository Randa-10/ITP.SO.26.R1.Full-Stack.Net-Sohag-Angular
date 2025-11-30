import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../Services/user-auth';
import { routes } from '../app.routes';

export const authGuard: CanActivateFn = (route, state) => {
  
  // V17
  let userService=inject(UserAuth)
  let router=inject(Router)
  if(userService.loginAuth==true){

  return true;
} else{
    alert('loginnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    router.navigate(['/signup'])
    return false
  }
  
};
