import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  typeOfMembership= 'free'
  canActivateChild(){
    return this.typeOfMembership === 'premium'? true: false;
  }
  
}
