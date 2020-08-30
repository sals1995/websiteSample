import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ChildGuard } from './guards/canActivateChild/child.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { DataGuard } from './guards/data.guard';


const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'courses', component:CoursesComponent, canActivateChild:[ChildGuard]},
  { path: 'course/:id', component:CourseDetailsComponent,resolve:[DataGuard]},
  { path: 'dashboard', component:DashboardComponent ,
    children:[
      { path:'charts', component:ChartsComponent},
      { path:'tables', component:TablesComponent},
  ]},
  { path: 'blog', component:BlogComponent, canActivate:[AuthGuard], 
    data:{expectedRole:'admin'}
   } ,
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
