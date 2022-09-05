import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../interface/interface";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post(`${environment.baseURL}/login`,
      `grant_type=&username=${user.username}&password=${user.password}&scope=&client_id=&client_secret=`,
      {headers:  { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded",}}
    )
  }

  registration(user: User):Observable<any>{
    return this.http.post(`${environment.baseURL}/register?username=${user.username}&password=${user.password}`,
      {username: user.username, password: user.password},
      {headers:  {Accept: "application/json", "Content-Type": "application/json"}}
    )
  }

}
