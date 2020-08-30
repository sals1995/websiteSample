import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogin :boolean =false
  public isLoginAdmin:boolean=false
  constructor() { }

  public isAuthontiacted(){
    return !! localStorage.getItem('token')
  }
  public tokenRole(){
    var token= localStorage.getItem('token')
    return window.atob(token)
  }
}
