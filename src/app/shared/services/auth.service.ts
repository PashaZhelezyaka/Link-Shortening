import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order, User } from "../interface/interface";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`${environment.baseURL}/login`,
      `grant_type=&username=${user.username}&password=${user.password}&scope=&client_id=&client_secret=`,
      {headers:  { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded",}}
    )
  }

  registration(user: User):Observable<any> {
    return this.http.post(`${environment.baseURL}/register?username=${user.username}&password=${user.password}`,
      JSON.stringify({username: user.username, password: user.password}),
      {headers:  {Accept: "application/json", "Content-Type": "application/json"}}
    )
  }

  setToken(response: any): void {
    if (response) {
      localStorage.setItem('fb-token', response.access_token);
    }
    else {
      localStorage.clear();
    }
  }

  get isLoggedIn(): boolean { return !!localStorage.getItem('fb-token') }

  logout() { this.setToken(null) }

  squeeze(link: string) {
    return this.http.post(`${environment.baseURL}/squeeze?link=${link}`,
      JSON.stringify({link}),
      {headers:
        {Authorization: `Bearer ${localStorage.getItem('fb-token')}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"}
      }
    )
  }

  statistics(order: Order[] = [Order.asc_short], offset = 0, limit = 0){

    let string_order = "";

    /*for (let i = 0; i < order.length; i++) {
      if (i != 0) string_order += "&";
      string_order += "order=" + order[i];
    }*/

    return this.http.get(`${environment.baseURL}/statistics?${string_order}&offset=${offset}&limit=${limit}`,
      {headers:
        {Authorization: `Bearer ${localStorage.getItem("fb-token")}`,
        Accept: "application/json",
      }}
    )
  }

}
