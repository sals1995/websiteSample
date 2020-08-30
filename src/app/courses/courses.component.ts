import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any;
  constructor( private route: Router,private courseService:CoursesService) { }

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
