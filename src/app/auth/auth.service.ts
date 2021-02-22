import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {Profile} from '../shared/model/Profile';
import {Observable, Subscription} from 'rxjs';
import {UserRegistration} from '../shared/model/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = false;
  username: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(email: string, password: string): Observable<any> {
    const body = new FormData();
    body.append('username', email);
    body.append('password', password);
    body.append('grant_type', 'password');
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('html5:password')
    });
    console.log(headers.get('Authorization'));
    console.log(body.toString());
    return this.http.post('/api/v1/oauth/token', body, {headers: headers});
  }

  public logout(): void {
    this._isLoggedIn = false;
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    localStorage.removeItem('username');
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getUserDetails(): Observable<Profile> {
    return this.http.get<Profile>('/api/v1/user');
  }

  isAdmin(): boolean {
     const profile: Profile = JSON.parse(localStorage.getItem('profile'));
  return profile ? profile.roles.filter(role => role.name === 'ROLE_ADMIN')
    .length > 0 : false;
}

  confirmRegistration(registrationToken: string) {
    return this.http.get('/api/v1/users/confirm-registration/' + registrationToken);
  }

  registerUser(userRegistration: UserRegistration): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('html5:password')
    });
    const request: HttpRequest<UserRegistration> = new HttpRequest<UserRegistration>('POST',
      '/api/v1/users/register/', userRegistration, {headers: headers});
    return this.http.request(request);
  }
}
