import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ChartsComponent } from '../../dashboard/charts/charts.component';
import { TablesComponent } from '../../dashboard/tables/tables.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartsComponent,
    TablesComponent
  ],
  imports: [
    CommonModule, 
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
