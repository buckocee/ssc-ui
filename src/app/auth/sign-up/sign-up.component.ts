import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UserRegistration} from '../../shared/model/UserRegistration';
import {RegisteredUser} from '../../shared/model/RegisteredUser';
import {HttpEvent} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private _signUpSubscription: Subscription;
  signUpForm: FormGroup;
  isLoading: boolean;

  constructor(private authService: AuthService, public dialogRef: MatDialogRef<SignUpComponent>,
              private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      matchingPassword: ['', Validators.required]
    });
  }

  signUp() {
    this.isLoading = true;
    const userRegistration: UserRegistration = this.getUserDetails();
    this._signUpSubscription = this.authService.registerUser(userRegistration)
      .subscribe((data: RegisteredUser) => {
        console.log(data.createdDate);
        console.log(data.email);
        this.isLoading = false;
        this.dialogRef.close();
        this._snackBar.open(`${data.firstName} signed up successfully`, 'OK',
          {duration: 2000});
      });
  }

  private getUserDetails(): UserRegistration {
    const userRegistration: UserRegistration = new UserRegistration();
    userRegistration.email = this.signUpForm.get('email').value;
    userRegistration.firstName = this.signUpForm.get('firstName').value;
    userRegistration.lastName = this.signUpForm.get('lastName').value;
    userRegistration.password = this.signUpForm.get('password').value;
    userRegistration.matchingPassword = this.signUpForm.get('matchingPassword').value;
    return userRegistration;
  }

  close() {
    this.dialogRef.close();
  }

}
