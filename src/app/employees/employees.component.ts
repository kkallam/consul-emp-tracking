import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private _apiService: ApisService) { }

  ngOnInit(): void {
  this.fetchEmployees();
  }
  fetchEmployees() {
    this._apiService.getAllEmployeesInfo().subscribe((employees:any) => {
      this._apiService.setEmployeeData(employees);
    })
  }



}
