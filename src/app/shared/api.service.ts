import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URL } from '../const';

export interface employedata {
  id: number;
  name: string;
  email: string;
  address: string;
  salary: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any): Observable<any> {
    //methodp
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
  getEmploye() {
    //method
    return this.http.get<employedata[]>('http://localhost:3000/get').pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
  }
  updateEmploye(data: any, id: number) {
    //method
    return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteEmploye(id: number) {
    //method
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // saveagencyname(agency: any) {
  //   //methodps
  //   return this.http.post<any>(`${API_URL}/agency/`, agency).pipe(
  //     map((res: any) => {
  //       console.log(res);
  //       return res;
  //     })
  //   );
}
//}
