import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService:AuthService){}
  private expectedRole;

// return false if : unautho. / token has been expired / unmatched roles
  canActivate(){
    if (this.authService.isAuthontiacted()){
      return true
    }
    window.alert(" you've not login yet, please login first")




    
    /* if (this.authService.isAuthontiacted() || this.authService.tokenRole === this.expectedRole){
      return true
    } */

  }
  
}
