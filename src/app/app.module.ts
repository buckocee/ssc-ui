import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store/reducers';
import {AppEffects} from './app.effects';
import {EffectsModule} from '@ngrx/effects';
import {MaterialModule} from './shared/material/material.module';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {httpInterceptorProviders} from './shared/http-interceptors';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmRegistrationComponent } from './auth/confirm-registration/confirm-registration.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    SignUpComponent,
    RegistrationComponent,
    ConfirmRegistrationComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule {

  // https://github.com/EladBezalel/material2-start
}
