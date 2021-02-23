import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LoginComponent} from '../../auth/login/login.component';
import {Router} from '@angular/router';
import {SignUpComponent} from '../../auth/sign-up/sign-up.component';
import {RegisteredUser} from '../model/RegisteredUser';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'SSC UI';
  private activeButton: boolean;
  username: string = localStorage.getItem('username');

  constructor(private authService: AuthService, private readonly router: Router, private dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public openAdminDialog(): void {
    this.activeButton = false;
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  public routeToModule(route: string) {
    this.router.navigateByUrl(route);
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

  register() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(SignUpComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe();
  }
}
