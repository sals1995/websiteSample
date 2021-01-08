import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService, private route:Router) { }

  public logout(){
    localStorage.removeItem('token')
    this.authService.isLogin = false
    this.route.navigate(['/'])
  }
  ngOnInit() {
    console.log('dashboard')
  }

}
