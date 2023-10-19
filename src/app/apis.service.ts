import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApisService {

  readonly JSONUrl = "http://localhost:4000/employees";
  private employeesDataSource = new BehaviorSubject(null);
  getEmployeeData = this.employeesDataSource.asObservable();

  constructor(private _http: HttpClient) { }

  // setting employees data as global 
  setEmployeeData(passedData: any) {
    this.employeesDataSource.next(passedData);
  }


  // ALL APIS Methods are here
  getAllEmployeesInfo() {
    return this._http.get(this.JSONUrl);
  }
  addANewEmployee(data: any) {
    return this._http.post(this.JSONUrl, data);
  }

}

// getAllEmployeesInfo(url: string): Observable<IEmployeees[]> {
//   return this._http.get<IEmployeees[]>(url).pipe(tap((employees: IEmployeees[]) => {
//     this.employees.next(employees);
//   })
//   );
// }
// getAnEmployeeInfo(url: string, id: any): Observable<IEmployeees[]> {
//   return this._http.get<IEmployeees[]>(`${url}/${id}`).pipe(tap((employees: IEmployeees[]) => {
//     this.employees.next(employees);
//   })
//   );
// }
// addANewEmployee(url: any, data: any): Observable<IEmployeees> {
//   return this._http.post<IEmployeees>(url, data).pipe(
//     tap((newEmployee: IEmployeees) => {
//       const updatedList = [...this.employees.value, newEmployee];
//       this.employees.next(updatedList);
//     })
//   );
// }
// updateAnEmployeeInfo(url: any, id: any, data: any): Observable<IEmployeees> {
//   return this._http.put<IEmployeees>(`${url}/${id}`, data).pipe(
//     tap((newEmployee: IEmployeees) => {
//       const updatedList = [...this.employees.value, newEmployee];
//       this.employees.next(updatedList);
//     })
//   );
// }

// deleteAnEmployeeInfo(url: any, id: any): Observable<IEmployeees> {
//   return this._http.delete<IEmployeees>(`${url}/${id}`).pipe(
//     tap((newEmployee: IEmployeees) => {
//       const updatedList = [...this.employees.value, newEmployee];
//       this.employees.next(updatedList);
//     })
//   );
// }
// deleteAll(url: any): Observable<IEmployeees> {
//   return this._http.delete<IEmployeees>(url).pipe(
//     tap((newEmployee: IEmployeees) => {
//       const updatedList = [...this.employees.value, newEmployee];
//       this.employees.next(updatedList);
//     })
//   );
// }


export interface IEmployeees {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  userName: string,
  title: string,
  joiningDate: string,
  leavingDate: string,
  projectStatus: string,
  visaStatus: string
}