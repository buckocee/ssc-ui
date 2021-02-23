import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {AdminGuard} from './auth/admin.guard';
import {RegistrationComponent} from './registration/registration.component';

// TODO: Research customizing angular.json for lazy-loading modules.
const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'claims',
    loadChildren: 'src/app/claims/claims.module#ClaimsModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'brokers',
    loadChildren: 'src/app/brokers/brokers.module#BrokersModule',
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileComponent
      },
      {
        path: 'edit',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
