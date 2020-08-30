import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId;
  courseData={};
  constructor( private routeA:ActivatedRoute,private courseService:CoursesService) { }

  ngOnInit() {
    // console.log(this.routeA.snapshot.params['id']);
    this.routeA.paramMap.subscribe((course:ParamMap)=>{
      this.courseId=course.get("id")
    })
    console.log(this.courseId)
    this.courseService.courseDetails(this.courseId).subscribe(data=>{
      this.courseData=data
      console.log(this.courseData)
    })
  }

}
