import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { CoursesService } from '../services/courses/courses.service';

@Injectable({
  providedIn: 'root'
})
export class DataGuard implements Resolve<any> {
  constructor(private courseService:CoursesService){}
  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    var courseId= next.params.id    
    return courseId ? this.courseService.courseDetails(courseId) : EMPTY
  }
}
