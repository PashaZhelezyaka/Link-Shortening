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

  //TODO возможно нужно дополнить запрос в body
  login(user: any)/*: Observable<Token>*/{
    return this.http.post(`${environment.baseURL}/login`,user)
  }

  registration(user: User):Observable<any>{
    return this.http.post(`${environment.baseURL}/register`,user)
  }

}
