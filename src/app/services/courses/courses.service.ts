import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  getAllCourses(){
    return this.http.get('http://localhost:8000/course/list')
   }
  courseDetails(id):Observable<any>{
    return this.http.get("http://localhost:8000/course/getCourseById/"+id)
  }

}
