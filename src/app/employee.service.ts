
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080';
  private authToken: string | null = null;

  private headers = new HttpHeaders()
    .set('Authorization', `Bearer`)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private storage: Storage) {
    this.loadAuthenticationStatus();
  }

  public async loadAuthenticationStatus() {
    const storedToken = await this.storage['get']('authToken');
    // this.isAuthenticated.next(!!storedToken);
  }

  // Read (GET) operation
  getEmployees(): Observable<any> {
    const requestOptions = {
      headers: this.headers,
    };
    return this.http.get<any>(`${this.apiUrl}/employees`, requestOptions);
  }

  // Create (POST) operation
  postEmployee(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': '*',
    });
 
    console.log("API DATA",data);
    const body = JSON.stringify(data);
    const requestOptions = {
      headers: this.headers,
    };
 
    return this.http.post<any>(`${this.apiUrl}/employees`, body, {headers});
  }

  // Update (PUT) operation
  updateEmployee(id: number, data: any): Observable<any> {
    const requestOptions = {
      headers: this.headers,
    };
   
    return this.http.put<any>(
      `${this.apiUrl}/employees/${id}`,
      data,
      requestOptions
    );
  } 

  // Delete (DELETE) operation
  deleteEmployee(id: number): Observable<any> {
    const requestOptions = {
      headers: this.headers,
    };
   
    return this.http.delete<any>(`${this.apiUrl}/employees/${id}`, requestOptions);
  }

  // Get single Employees by id
  getSingleEmployee(employeeId: number): Observable<any> {
    const requestOptions = {
      headers: this.headers,
    };
  
    return this.http.get<any>(`${this.apiUrl}/employees/${employeeId}`, requestOptions);
  }
 



}