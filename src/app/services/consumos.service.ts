import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { develop, production } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class ConsumosServices {
   
    private apiUrl = develop.API_URL;
    constructor(private http: HttpClient) { }

    getAllCallsHour(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/getConsumos/hour`);
    }
}

