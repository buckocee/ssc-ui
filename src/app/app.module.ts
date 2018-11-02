import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {AppEffects} from './app.effects';
import {EffectsModule} from '@ngrx/effects';
import {MaterialModule} from './shared/material/material.module';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {httpInterceptorProviders} from './shared/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

  // https://github.com/EladBezalel/material2-start
}
