import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = false;
  private _redirectUrl: string;

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string) {
    const body = new FormData();
    body.append('username', email);
    body.append('password', password);
    body.append('grant_type', 'password');
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('android:secret')});
    console.log(headers.get('Authorization'));
    console.log(body.toString());
    const response = this.http.post('/api/v1/oauth/token', body, {headers: headers})
      .subscribe(data => this.setSession(data));
    if (response['access_token']) {
      this._isLoggedIn = true;
    }
    return response;
  }

  public logout(): void {
    this._isLoggedIn = false;
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private setSession(authResult) {
    console.log('Auth response: ' + authResult);
    const expiresAt = moment().add(authResult['expires_in'], 'second');

    localStorage.setItem('access_token', authResult['access_token']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
