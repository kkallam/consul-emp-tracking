import { Component, OnInit } from '@angular/core';
import { ApisService, IEmployeees } from 'src/app/apis.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  payload: any;
  empId: string = "";
  constructor(private _apiService: ApisService) { }
  newEmployeeData: IEmployeees = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userName: "",
    title: "",
    joiningDate: "",
    leavingDate: "",
    projectStatus: "",
    visaStatus: ""
  }
  employeesList: any = [];
  //newEmployeeData: IEmployeees[] = [];

  ngOnInit(): void {
    console.log("newEmployeeData");
    console.log(this.newEmployeeData);
    this._apiService.getEmployeeData.subscribe( (employee)=> {
      this.employeesList = employee;
      console.log(this.employeesList);
    })
    
  }

  checkEmployeeExists() {

  }

  fetchEmployees() {
    this._apiService.getAllEmployeesInfo().subscribe((employees) => {
      this._apiService.setEmployeeData(employees);
    })
  }
  addEmployee() {
    let emplId = Math.floor(Math.random() * (9900 - 1000 + 1)) + 1000;
    this.empId = emplId.toString();
    this.empId = "Emp" + this.empId;
    this.newEmployeeData.id = this.empId;

    this._apiService.addANewEmployee(this.newEmployeeData).subscribe((data) => {
      console.log("Added Successsfully!");
      
    })

  }

}
