import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService:AuthService,  private router: Router){}
// return false if : unautho. / token has been expired 
  canActivate(next:ActivatedRouteSnapshot){
    if (this.authService.isAuthontiacted()){
      return true
    }
    else{
      window.alert(" you've not login yet, please login first")
      this.router.navigate(['/home'])
    }
    
  }


 

  
  
}
