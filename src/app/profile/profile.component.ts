import {Component, OnInit} from '@angular/core';
import {Profile} from '../shared/model/Profile';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  profileForm: FormGroup;
  isEditable = false;

  constructor(private route: ActivatedRoute, private location: Location,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.profileForm = this._fb.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      middleInitial: ['', Validators.required],
      lastName: ['', Validators.required],
      createdDate: ['', Validators.required],
      carrier: this._fb.group({
        businessName: ['', [Validators.required]],
        mcNumber: [''],
        dotNumber: [''],
        phoneNumber: ['', [Validators.required]],
        emailAddress: ['', [Validators.email]],
        physicalAddress: this._fb.group({
          streetAddress: [''],
          city: [''],
          state: [''],
          zipCode: ['']
        })
      }),
      // roles: this._fb.array([this.createRole()])
    });

    if (this.route.snapshot.toString().indexOf('edit') > 0) {
      this.isEditable = true;
    } else {
      this.profileForm.disable();
      this.isEditable = false;
    }
    // this.profile.roles.forEach(() => (this.profileForm.get('roles') as FormArray).push(this.createRole()));
  }

  // createRole(): FormGroup {
  //   return this._fb.group({
  //     name: [''],
  //     privileges: ['']
  //   });
  // }

  goBack(): void {
    this.location.back();
  }
}
