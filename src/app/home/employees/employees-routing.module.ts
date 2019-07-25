import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeesComponent
  },
  {
    path:'add',
    component: AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
