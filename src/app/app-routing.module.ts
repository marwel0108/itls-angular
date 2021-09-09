import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AddBannersComponent } from './pages/banners/add-banners/add-banners.component';
import { BannersComponent } from './pages/banners/banners.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { PublicGuard } from './shared/guards/public.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'banners', component: BannersComponent},
  {path: 'addBanners', component: AddBannersComponent},
  {path: 'login', component: LoginComponent, canActivate: [PublicGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
