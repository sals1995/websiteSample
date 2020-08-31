import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsComponent } from '../../dashboard/charts/charts.component';
import { TablesComponent } from '../../dashboard/tables/tables.component';
import { ChildGuard } from '../../guards/canActivateChild/child.guard';


const routes: Routes = [
  { path: '', component:DashboardComponent,
    children:[
      { path:'charts', component:ChartsComponent},
      { path:'tables', component:TablesComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
