import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api = environment.apiUrl;
  constructor(public http: HttpClient) { }


  getEmployee() {
    debugger
   let headers = new HttpHeaders().set('Authorization', 'Bearer '+JSON.parse(sessionStorage.getItem('userInfo'))['token'])
    return this.http.get(this.api + 'employees/all',{headers: headers});
  }
}
