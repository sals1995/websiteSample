import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  canActivateChild(){
    return true;
  }
  
}
