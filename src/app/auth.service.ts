// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private storage: Storage) {
    this.loadAuthenticationStatus();
  }

  public async loadAuthenticationStatus() {
    const isLoggedIn = await this.storage.get('isLoggedIn');
    this.isAuthenticated.next(!!isLoggedIn);
  }


   // endpoint handling user registration
  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': '*',
    });

    return this.http.post<any>(`${this.apiUrl}/users`, user, { headers });
  }

   // endpoint handling user login
  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': '*',
    });

    const body = JSON.stringify(credentials);

    return this.http.post<any>(`${this.apiUrl}/users/login`, body, { headers });
  }

   // saving authentication statys
  saveAuthToken(token: string): void {
    this.storage.set('authToken', token);
  }


  // clear token after logout
  clearAuthToken(): void {
    this.storage.remove('authToken');
    this.setAuthenticationStatus(false);
  }


  // check  authenticatioin status
  setAuthenticationStatus(status: boolean): void {
    this.isAuthenticated.next(status);
   
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
