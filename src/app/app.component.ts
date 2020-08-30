import { Component } from '@angular/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websiteSample';

  constructor(private authService:AuthService, private route:Router){}
  public login(){
    var tokenRole = "student"
    var customToken :string = window.btoa(tokenRole)
    localStorage.setItem('token',customToken)
    this.authService.isLogin = true
    
    // var customToken :string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  public logout(){
    localStorage.removeItem('token')
    this.authService.isLogin = false
    this.route.navigate(['/'])
  }
  
}
