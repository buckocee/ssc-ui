import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {AdminGuard} from './auth/admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'claims',
    loadChildren: 'src/app/claims/claims.module#ClaimsModule',
    canActivate: [AuthGuard]
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
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
