import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, catchError, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:3000/api/employees";
  }

  getAllEmployees() {
    return this.httpClient.get<{ data: Array<Employee>, message: string }>(this.url).pipe(
      delay(2000),
      catchError(this._handleError('getAllEmployees', { data: [], message: "" }))
    );
  }

  private _handleError<T>(operation = "operation", result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      // Error Logging / Reporting
      console.error(`${operation} failed: ${err.message}`);
      switch (err.status) {
        case 403:
          return throwError(() => err.error.message);
        case 500:
          return throwError(() => err.statusText);
        default:
          return throwError(() => "Connection Error, please try again later...");
      }
    }
  }
}
