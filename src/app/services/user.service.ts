import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { develop, production } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = develop.API_URL;

    constructor(private http: HttpClient) { }

    // Método para obtener todos los usuarios
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users`);
    }

    // Método para obtener un usuario por su email
    getUserByEmail(email: string): Observable<any> {
        // Actualiza la URL para que coincida con la ruta definida en el backend
        return this.http.get<any>(`${this.apiUrl}/users/search?email=${email}`);
    }
}