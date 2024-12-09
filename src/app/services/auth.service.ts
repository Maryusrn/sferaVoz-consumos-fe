import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { develop, production } from "../../environments/environment";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
   
    private apiUrl = develop.API_URL;
    constructor(private http: HttpClient) { }

    login(user: User): Observable<any>{
      return this.http.post(`${this.apiUrl}/login`, user);
    }
}

