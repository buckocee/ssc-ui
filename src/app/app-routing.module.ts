import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: 'claims',
    loadChildren: 'src/app/claims/claims.module#ClaimsModule'
  },
  {
    path: 'brokers',
    loadChildren: 'src/app/brokers/brokers.module#BrokersModule'
  },
  {
    path: '',
    redirectTo: '',
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
