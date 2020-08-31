import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { DataGuard } from './guards/data.guard';
import { CanActiveGuard } from './guards/canActivate/can-active.guard';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'contact', component:ContactComponent},
  { path: 'courses', component:CoursesComponent},
  { path: 'course/:id', component:CourseDetailsComponent},
  { path: 'blog', component:BlogComponent} ,
   {path:'dashboard',loadChildren:() => import('./modules/dashboardModule/dashboard.module').then(m => m.DashboardModule)},
  {path:'',redirectTo:'/home',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// data:{expectedRole:'admin'}