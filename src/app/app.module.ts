import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { AccountingComponent } from './accounting/accounting.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesListComponent } from './employees/view-employees/view-employees.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { ApisService } from './apis.service';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'employees', component: EmployeesComponent, children: [
      { path: 'add', component: AddEmployeeComponent },
      { path: 'viewall', component: EmployeesListComponent },
      { path: '', redirectTo: 'viewall', pathMatch: 'full' }
    ]
  },
  { path: 'timesheets', component: TimesheetsComponent },
  { path: 'accounting', component: AccountingComponent },
  { path: 'immigration', component: ImmigrationComponent },
  { path: 'contactus', component: ContactusComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EmployeesComponent,
    TimesheetsComponent,
    AccountingComponent,
    ImmigrationComponent,
    ContactusComponent,
    HomeComponent,
    FooterComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
