import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {httpInterceptorProviders} from '../shared/http-interceptors';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [AuthService,
    httpInterceptorProviders
  ]
})
export class AuthModule {
}
