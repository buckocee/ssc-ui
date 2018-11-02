import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
import * as moment from 'moment';


export class MenuItem {
  children: MenuItem[];
  name: string;
  route: string;
}












@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MaterialTest';
  private activeButton: boolean;
  username: string = localStorage.getItem('username');

  constructor(private readonly router: Router, private authService: AuthService) {

  }

  public openAdminDialog(): void {
    this.activeButton = false;
  }

  ngOnInit(): void {
  }

  public getActiveButton(urlPath: string) {
    return this.router.url.indexOf(urlPath) > -1;
  }

  public routeToModule(route: string) {
    this.router.navigateByUrl(route);
  }

  public isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  loginUser() {
    this.authService.logout();
    this.authService.login('buckocee@gmail.com', 'Pa$sw0rd')
      .subscribe(data => {
        this.setSession(data);
        this.setUserProfile();
      });
  }

  logoutUser() {
    this.authService.logout();
  }

  private setSession(authResult) {
    console.log('Auth response: ' + authResult);
    const expiresAt = moment().add(authResult['expires_in'], 'second');

    localStorage.setItem('access_token', authResult['access_token']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  setUserProfile() {
      this.authService.getUserDetails()
      .subscribe(user => {
        console.log('User: ' + user['firstName']);
        this.username = user['firstName'];
        localStorage.setItem('profile', JSON.stringify(user));
        localStorage.setItem('username', user['firstName']);
      });
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
