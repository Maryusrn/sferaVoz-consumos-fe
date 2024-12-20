import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { develop, production } from "../../environments/environment";
import { User } from "../models/user.model";
import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
   
    private apiUrl = develop.API_URL;

    private userDetailsSubject = new BehaviorSubject<User | null>(null);
    userDetails$ = this.userDetailsSubject.asObservable();

    constructor(private http: HttpClient, private router: Router) { }

    login(user: User): Observable<string> {
      return this.http.post<{ token: string }>(`${this.apiUrl}/login`, user).pipe(
        map(response => response.token)
      );
    }

    isLoggedIn(): boolean {
    
      const token = localStorage.getItem('token');
      return !!token && !this.isTokenExpired(token);
      
    }

    isTokenExpired(token: string): boolean {
      
      const tokenExpirationDate = this.getTokenExpirationDate(token);
      return !tokenExpirationDate || tokenExpirationDate < new Date();
    }

    private getTokenExpirationDate(token: string): Date | null {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (!payload.exp) {
          return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(payload.exp);
        return date;
      } catch (error) {
        return null;
      }
    }

    logout() {
      localStorage.removeItem('token');
      this.userDetailsSubject.next(null);
      this.router.navigate(['/login']);
    }

    private getToken(): string | null {
      const token = localStorage.getItem('token');
      return token;
    }
    

    private decodeToken(token: string): any {
      try {
        const decoded = jwtDecode(token);
        return decoded;
      } catch (Error) {
        return null;
      }
    }

    getUserId(): string | null {
      const token = this.getToken();
      if (token) {
        const decoded = this.decodeToken(token);
        return decoded?.id ?? null;
      }
      return null;
    }

    getUserById(): Observable<User | null> {
      const userId = this.getUserId();
      if (userId) {
        return this.http.get<User>(`${this.apiUrl}/users/${userId}`).pipe(
          map(response => response),
          catchError(error => {
            return of(null);
          })
        );
      }
      return of(null);
    }

    getUserName(): Observable<string | null> {
      const userId = this.getUserId();
      if (userId) {
        return this.http.get<{ name: string }>(`${this.apiUrl}/users/${userId}`).pipe(
          map(response => response.name)
        );
      }
      return of(null);
    }

    getUserEmail(): Observable<string | null> {
      const userId = this.getUserId();
      if (userId) {
        return this.http.get<{ email: string }>(`${this.apiUrl}/users/${userId}`).pipe(
          map(response => response.email)
        );
      }
      return of(null);
    }

    getUserRole(): number | null {
      const token = this.getToken();
      if (token) {
        const decoded = this.decodeToken(token);
        return decoded?.rol ?? null;
      }
      return null;
    }
}