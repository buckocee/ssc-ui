import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
import * as moment from 'moment';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginComponent} from './login/login.component';


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

  title = 'SSC UI';
  private activeButton: boolean;
  username: string = localStorage.getItem('username');

  constructor(private readonly router: Router, private authService: AuthService, private dialog: MatDialog) {

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

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  login() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      this.username = value;
      localStorage.setItem('username', value);
    });
  }

  logout() {
    this.authService.logout();
  }
}
