import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public courses:any;
  constructor(private authService:AuthService,  private route: Router,private courseService:CoursesService) { }
  public login(){
    var tokenRole = "admin"
    var customToken :string = window.btoa(tokenRole)
    localStorage.setItem('token',customToken)
    this.authService.isLoginAdmin = true
    this.route.navigate(['/dashboard'])
  }
  public logout(){
    localStorage.removeItem('token')
    this.authService.isLogin = false
    this.route.navigate(['/'])
  }
  
  public onSelect(id){
    this.route.navigate(["/course",id]);
  }
  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses=>{
      this.courses=courses
    console.log(this.courses);
    })
  }

}
