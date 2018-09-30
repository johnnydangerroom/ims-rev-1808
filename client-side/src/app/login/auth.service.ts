import { Injectable } from '@angular/core';
import { Login, User } from '../class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { CoreService } from '../core/core.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl = this.coreService.getURL();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private coreService: CoreService) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }

  postLogin(email: string, password: string): Observable<Login> {
    console.log(email);
    console.log(password);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //     // 'Authorization': 'my-auth-token'
    //   })
    // };
    localStorage.setItem('token', 'JSON.stringify(user)');
    return this.http
      .post(
        `${this.appUrl}/user/login`,
        {
          email: email,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(map(resp => resp as Login));
  }

  getLogin(sessionId: string): Observable<Login> {
    return this.http.get(`${this.appUrl}/user/login`).pipe(map(resp => resp as Login));
  }

  getForgotten(email: string) {
    return this.http.get(`${this.appUrl}/forget`);
  }

  postUser(user: User): Observable<any> {
    return this.http.post(`${this.appUrl}/register`, user);
  }
}