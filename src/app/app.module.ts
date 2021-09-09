import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { GotodashboardComponent } from './pages/components/gotodashboard/gotodashboard.component';
import { BannersComponent } from './pages/banners/banners.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBannersComponent } from './pages/banners/add-banners/add-banners.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    GotodashboardComponent,
    BannersComponent,
    AddBannersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
