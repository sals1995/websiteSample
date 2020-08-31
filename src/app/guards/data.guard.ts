import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { CoursesService } from '../services/courses/courses.service';

@Injectable({
  providedIn: 'root'
})
export class DataGuard implements Resolve<any> {
  constructor(private courseService:CoursesService){}
  resolve():Observable<any>{
    return  this.courseService.getAllCourses() || EMPTY
  }
}
