import { Component, OnInit, Input } from '@angular/core';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
  employeesList: any;
  isModalOpen: boolean = false;
  userInfo:any[]=[];


  @Input() data: any[] = [];
  sortColumn: string = '';
  sortOrder: number = 1;
  constructor(private _api:ApisService){
    
  }
  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(){
    this._api.getAllEmployeesInfo("http://localhost:4000/employees").subscribe((data)=>{
      console.log("data");
      console.log(data);
      this.employeesList = data;
      
    })
  }

  editEmployeeInfo(user: any){
    this.userInfo = user;
    console.log(this.userInfo);
    
  }

  deleteEmployeeInfo(user:any) {
    console.log("Delete", user)
  }

  sort(columnName: string) {
    if (this.sortColumn === columnName) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortColumn = columnName;
      this.sortOrder = 1;
    }
    this.employeesList = this.employeesList.sort((a:any, b:any) => {
      if (a[columnName] < b[columnName]) {
        return -1 * this.sortOrder;
      } else if (a[columnName] > b[columnName]) {
        return 1 * this.sortOrder;
      } else {
        return 0;
      }

      
    });
  }
 

  


}
