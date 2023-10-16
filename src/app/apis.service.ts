import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IEmployeees {
  id: number,
  fullname : string,
  email : string,
  phone : number,
  username: string,
  password: string,
  role : string
}

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private _http: HttpClient) { }

  getAllEmployeesInfo(url: string): Observable<any> {
     return this._http.get(url);
  }

  getAnEmployeeInfo(url:string, id: any): Observable<any> {
    return this._http.get(`${url}/${id}`);
  }

  addANewEmployee(url: any, data: any): Observable<any> {
    return this._http.post(url, data)
  }

  updateAnEmployeeInfo(url: any, id:any, data:any): Observable<any> {
    return this._http.put(`${url}/${id}`, data) ;
  }

  deleteAnEmployeeInfo(url:any, id:any): Observable<any> {
    return this._http.delete(`${url}/${id}`);
  }
  deleteAll(url: any):Observable<any>{
    return this._http.delete(url);
  }

}
