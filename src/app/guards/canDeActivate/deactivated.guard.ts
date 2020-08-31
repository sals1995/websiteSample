import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../../contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivatedGuard implements CanDeactivate <ContactComponent> {
  canDeactivate(component: ContactComponent){
    if (window.confirm('Are you sure you want to exit this page')){
      return true
    }else{
      return false
    }
  }
  
}
 


