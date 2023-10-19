import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class EmployeesListComponent implements OnInit {
  employeesList: any = [];
  isModalOpen: boolean = false;
  userInfo: any;
  sortColumn: string = '';
  sortOrder: number = 1;
  dtOptions: DataTables.Settings={};
  //dtTrigger:Subject<any> = new Subject<any>();
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _apiService: ApisService) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      //scrollCollapse: true,
      //scrollY: '50vh'  
      // simple_numbers - 'Previous' and 'Next' buttons, plus page numbers, numbers - Page number buttons only, simple - 'Previous' and 'Next' buttons only, 
      // full - First', 'Previous', 'Next' and 'Last' buttons, full_numbers - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
      // first_last_numbers - 'First' and 'Last' buttons, plus page numbers
      searching: true,
      paging: true,
      lengthChange: true,
      // pageLength: 5,
      language: {
        searchPlaceholder: "search an employee"
      }
    }
    this.loadTable();
  }

  loadTable() {
    this._apiService.getEmployeeData.subscribe((emp) => {
      this.employeesList = emp;
      this.dtTrigger.next(null);
    })
  }

  editEmployeeInfo(user: any) {
    this.userInfo = user;
    console.log(this.userInfo);
  }

  deleteEmployeeInfo(user: any) {
    console.log("Delete", user)
  }

  // sort(columnName: string) {
  //   if (this.sortColumn === columnName) {
  //     this.sortOrder = -this.sortOrder;
  //   } else {
  //     this.sortColumn = columnName;
  //     this.sortOrder = 1;
  //   }
  //   this.employeesList = this.employeesList.sort((a: any, b: any) => {
  //     if (a[columnName] < b[columnName]) {
  //       return -1 * this.sortOrder;
  //     } else if (a[columnName] > b[columnName]) {
  //       return 1 * this.sortOrder;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

}
