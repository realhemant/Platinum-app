import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:        'home',
    component:   HomeComponent,
    children:    [
        // {
        //     path:         'dashboard',
        //     loadChildren: './dashboard/dashboard.module#DashboardModule'
        // },
        {
            path:         'user',
            loadChildren: './users/users.module#UsersModule'
        },
        {
            path:         'employee',
            loadChildren: './employees/employees.module#EmployeesModule'
        },
        {
            path:         'project',
            loadChildren: './projects/projects.module#ProjectsModule'
        }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
