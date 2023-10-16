import { Component } from '@angular/core';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  payload: any;
  constructor(private _api:ApisService){}

  addEmployee(){
    console.log("Adding a new employee")
    this._api.addANewEmployee("http://localhost:3000/employees", this.payload).subscribe((data)=> {
      console.log("Added Successsfully!");
    })
  }

}
