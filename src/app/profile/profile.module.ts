import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../shared/material/material.module';
import {httpInterceptorProviders} from '../shared/http-interceptors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    ProfileRoutingModule
  ],
  declarations: [
    EditProfileComponent,
    DeleteProfileComponent
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class ProfileModule { }
