import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { develop } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
   
    private apiUrl = develop.API_URL; //ejemplo de declaración de una URL de API dinamica
    constructor(private http: HttpClient, private router: Router) { } // Aqui construirás servicios heredados

}

