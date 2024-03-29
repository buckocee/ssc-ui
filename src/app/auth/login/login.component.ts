import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import * as moment from 'moment';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private username: string;
  private _loginSubscription: Subscription;
  private _profileSubscription: Subscription;
  loginForm: FormGroup;

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<LoginComponent>,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    this.authService.logout();
    this._loginSubscription = this.authService.login(this.loginForm.get('username').value,
      this.loginForm.get('password').value)
      .subscribe(data => {
        this.setSession(data);
        this.setUserProfile();
      });
    this.dialogRef.close(this.username);
  }

  private setSession(authResult) {
    console.log('Auth response: ' + authResult);
    const expiresAt = moment().add(authResult['expires_in'], 'second');

    localStorage.setItem('access_token', authResult['access_token']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  setUserProfile() {
    this._profileSubscription = this.authService.getUserDetails()
      .subscribe(user => {
        console.log('User: ' + user['firstName']);
        this.username = user['firstName'];
        localStorage.setItem('profile', JSON.stringify(user));
      });
  }

  close() {
    this.dialogRef.close(this.username);
  }

  ngOnDestroy(): void {
    // this._loginSubscription.unsubscribe();
    // this._profileSubscription.unsubscribe();
  }
}
